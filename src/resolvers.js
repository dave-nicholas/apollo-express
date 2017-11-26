import { Shipment, Item } from './sqlite';
import { Quote } from './fetch';

const resolvers = {
  Query: {
    shipment(_, args) {
      return Shipment.find({ where: args });
    },
    shipments(_) {
      return Shipment.findAll();
    },
    quote(_) {
      return Quote.getOne();
    }
  },
  Shipment: {
    items(shipment) {
      return shipment.getItems();
    }
  },
  Item: {
    shipment(item) {
      return item.getShipment();
    }
  }
};

export default resolvers;
