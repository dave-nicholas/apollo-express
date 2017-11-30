# Apollo-express

A basic node graphql server to demonstrate running multiple datasources behind a single graphql endpoint using apollographql.
This concept is handy if you wish to defer things like searching to different data providers.

This example includes: 
 * MongoDB
 * sqlite
 * Algolia
 * fetch

## Installation and running 

`yarn`

`yarn start`

### Mongo
This demo assumes you have a local mongo db setup with a database called `test_1`.

### Algolia
This demo assumes that you have an aloglia account (Community Plan is fine).
You just need to rename the `.env.sample` file to `.env` and enter your aloglia api key.

### Run
Then visit to the delightful `GraphiQL` browser interface.

`http://localhost:3000/graphiql`

## Example queries 

### Get all shipments - sqlite

```graphql
{
  shipments {
    date
    reference
    items {
      description
      quantity
    }
  }
}
```

### Get shipment - sqlite + mongodb

```graphql
{
  shipment(reference: "Mrs. Maude Huel") {
    address
  }
}
```

### Quote - fetch request

```graphql
{
  quote
}
```

### Getting results from sqlite after a search - Algolia + sqlite

```graphql
{
  shipmentsByCarrier(carrier: "Langosh LLC") {
    date
    reference
  }
}
```