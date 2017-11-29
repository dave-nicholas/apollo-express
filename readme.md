# Apollo-express

A basic graphql server to demonstrate running multiple datasources behind a single graphql endpoint.
This concept is handy if you wish to defer things like searching to a different data provider.
This example includes: mongodb, sqlite and fetch.

## Installation and running 

`yarn`

`yarn start`

This demo assumes you have a local mongo db setup with a database called `test_1`.

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

### Quote

```graphql
{
  quote
}
```