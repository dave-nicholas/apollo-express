import { ShipmentModel, db } from './sqlite';
import { Address } from './mongo';
import { index } from './algolia';
import casual from 'casual';
import _ from 'lodash';

//clear mongo document
Address.remove({}, () => {});

export const seed = () => {
  casual.seed(123);
  db.sync({ force: true }).then(() => {
    _.times(10, () => {
      return ShipmentModel.create({
        reference: casual.name,
        date: casual.unix_time
      }).then(shipment => {
        _.times(casual.integer(2, 5), () => {
          shipment.createItem({
            description: casual.title,
            quantity: casual.integer(1, 10)
          });
        });

        //populate mongodb
        const address = new Address();
        address.shipmentId = shipment.id; //store in mongo against shipment id
        address.address = casual.address;
        address.save();

        //populate algolia search
        index.addObject({
          carrier: casual.company_name,
          shipmentId: shipment.id //store in algolia against shipment id
        });
      });
    });
  });
};
