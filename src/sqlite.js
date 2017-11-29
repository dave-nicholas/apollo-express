import Sequelize from 'sequelize';

export const db = new Sequelize('shipments', null, null, {
  dialect: 'sqlite',
  storage: './shipments.sqlite',
  operatorsAliases: false
});

export const ShipmentModel = db.define('shipment', {
  date: { type: Sequelize.INTEGER },
  reference: { type: Sequelize.STRING }
});

export const ItemModel = db.define('item', {
  description: { type: Sequelize.STRING },
  quantity: { type: Sequelize.INTEGER }
});

ShipmentModel.hasMany(ItemModel);
ItemModel.belongsTo(ShipmentModel);

export const Shipment = db.models.shipment;
export const Item = db.models.item;
