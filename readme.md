# Apollo-express

## Installation and running 

`yarn`

`yarn start`

## Example queries 

### Get all shipments

```
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

```
{
  shipment(reference: "Mrs. Maude Huel") {
    date
    reference
  }
}
```