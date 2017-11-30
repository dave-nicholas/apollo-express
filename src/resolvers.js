import { Shipment, Item } from './sqlite';
import { Address } from './mongo';
import { index } from './algolia';
import { Quote } from './fetch';

const resolvers = {
  Query: {
    shipment(_, args) {
      return Shipment.find({ where: args });
    },
    shipments() {
      return Shipment.findAll();
    },
    async shipmentsByCarrier(_, { carrier }) {
      const { hits } = await index.search(carrier);
      return !!hits.length
        ? Shipment.find({ where: { id: hits.map(hit => hit.shipmentId) } })
        : null;
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
