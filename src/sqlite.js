import Sequelize from 'sequelize';
import casual from 'casual';
import _ from 'lodash';

const db = new Sequelize('shipments', null, null, {
  dialect: 'sqlite',
  storage: './shipments.sqlite',
  operatorsAliases: false
});

const ShipmentModel = db.define('shipment', {
  date: { type: Sequelize.INTEGER },
  reference: { type: Sequelize.STRING }
});

const ItemModel = db.define('item', {
  description: { type: Sequelize.STRING },
  quantity: { type: Sequelize.INTEGER }
});

ShipmentModel.hasMany(ItemModel);
ItemModel.belongsTo(ShipmentModel);

// create mock data with a seed, so we always get the same
casual.seed(123);
db.sync({ force: true }).then(() => {
  _.times(10, () => {
    return ShipmentModel.create({
      reference: casual.name,
      date: casual.unix_time
    }).then(item => {
      _.times(casual.integer(2, 5), () => {
        item.createItem({
          description: casual.title,
          quantity: casual.integer(1, 10)
        });
      });
    });
  });
});

const Shipment = db.models.shipment;
const Item = db.models.item;

export { Shipment, Item };
