import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import resolvers from './resolvers';

const typeDefs = `
type Shipment {
  id: Int
  date: Int
  reference: String
  items: [Item]
  address: String
  carrier: String
}
type Item {
  id: Int
  description: String
  quantity: Int
  shipment: Shipment
},
type Query {
 shipment(reference: String): Shipment
 shipments: [Shipment],
 carrier(reference: String): Shipment
 quote: String
}
schema {
 query: Query
}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;
