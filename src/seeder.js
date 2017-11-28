import { ShipmentModel, db } from './sqlite';
import { Address } from './mongo';
import casual from 'casual';
import _ from 'lodash';

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
        const address = new Address();
        address.shipmentId = shipment.id;
        address.address = casual.address;
        address.save();
      });
    });
  });
};
