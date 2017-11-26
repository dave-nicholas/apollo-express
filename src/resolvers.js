import { Shipment, Item } from './sqlite';

const resolvers = {
  Query: {
    shipment(_, args) {
      return Shipment.find({ where: args });
    },
    shipments(_) {
      return Shipment.findAll();
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
