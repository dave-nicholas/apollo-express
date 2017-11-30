# Apollo-express

A basic graphql server to demonstrate running multiple datasources behind a single graphql endpoint.
This concept is handy if you wish to defer things like searching to 
This example includes: mongodb, sqlite and fetch.

## Installation and running 

`yarn`

`yarn start`

### Mongo
This demo assumes you have a local mongo db setup with a database called `test_1`.

### Algolia
This demo assumes that you have an aloglia account (Community Plan is fine).
You just need to rename the `.env.sample` file to `.env` and enter your aloglia api key.

Then visit `http://localhost:3000/graphiql`.

## Example queries 

### Get all shipments

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

### Get shipment by ref

```graphql
{
  shipment(reference: "Mrs. Maude Huel") {
    date
    reference
  }
}
```

### Quote - fetch

```graphql
{
  quote
}
```

### Getting results from sqlite after a text search on Algolia

```graphql
{
  shipmentsByCarrier(carrier: "Langosh LLC") {
    date
    reference
  }
}
```