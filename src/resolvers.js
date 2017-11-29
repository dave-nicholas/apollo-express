import { Shipment, Item } from './sqlite';
import { Address } from './mongo';
import { Quote } from './fetch';

const resolvers = {
  Query: {
    shipment(_, args) {
      return Shipment.find({ where: args });
    },
    shipments() {
      return Shipment.findAll();
    },
    quote() {
      return Quote.getOne();
    }
  },
  Shipment: {
    items(shipment) {
      return shipment.getItems();
    },
    address({ id }) {
      return Address.findOne({ shipmentId: id }).then(
        address => address.address
      );
    }
  },
  Item: {
    shipment(item) {
      return item.getShipment();
    }
  }
};

export default resolvers;
