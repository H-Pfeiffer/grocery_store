# Grocer

Welcome to Grocer, an online tool to help with all your shopping needs.

## Functionality
- displayGroceryList
- addItems 
- removeItems
- buyItem

## Data Storage

Each list is an array of item objects. 

```
groceryList = []

- item = {
    name: string,
    quantity: number,
    isPurchased: boolean
  }
```

### Example: 

```
groceryList = [
    {
        itemName: "gallon of milk",
        quantity: 1,
        price: 3.15,
        bought: false,
    },
    {
        itemName: "loaf of bread",
        quantity: 1,
        price: 2.50,
        bought: true,
    },
];
```

## Getting Started
1. Clone the repository
2. Run `npm install` to install dependencies
3. Run `npm start` to start the application


