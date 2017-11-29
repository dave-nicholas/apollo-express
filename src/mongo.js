import Mongoose from 'mongoose';

const mongo = Mongoose.connect('mongodb://localhost/test_1');

const AddressSchema = Mongoose.Schema({
  address: String,
  shipmentId: Number
});

export const Address = Mongoose.model('Address', AddressSchema);
