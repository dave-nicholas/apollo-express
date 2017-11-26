# Apollo-express

A basic graphql

## Installation and running 

`yarn`

`yarn start`

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