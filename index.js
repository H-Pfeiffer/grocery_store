const groceryList = []; 

// Import the readline module for handling user input in the console
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin, // Read from standard input (keyboard)
  output: process.stdout // Write to standard output (console)
});

const displayGroceryList = (groceryList) => {
    console.log('\n----------------------------------------------------\n');
    console.log('\nYour updated grocery list contains:\n');
    groceryList.forEach((item, i) => {
        console.log(`Item ${i + 1}: ${item.quantity} ${item.itemName} for $${item.price} - purchased: ${item.bought}`);  
    })
    directory();
}

const addItem = () => {
    console.log('\n----------------------------------------------------\n');
    let item = {};
    rl.question('What would you like to add to your grocery list? ', (itemName) => {
        rl.question('How many do you want? ', (quantity) => {
            rl.question('What is the price? ', (price) => {
                item = {
                    itemName: itemName.toLowerCase().trim(),
                    quantity: parseInt(quantity),
                    price: parseFloat(price),
                    bought: false,
                }
                groceryList.push(item);
                directory();
            });
        });
    });
}

const removeItem = () => {
    console.log('\n----------------------------------------------------\n');
    rl.question('Which item would you like to remove from your grocery list? ', (itemName) => {
        const index = groceryList.findIndex(item => item.itemName.toLowerCase() === itemName.toLowerCase());
        if (index !== -1) {
            groceryList.splice(index, 1); 
            console.log(`\n${itemName} has been removed from your grocery list.`);
        } else {
            console.log(`${itemName} is not in your grocery list.`);
        }
        directory();
    });
}

const buyItem = () => {
    console.log('\n----------------------------------------------------\n');
    rl.question('Which grocery list item would you like to buy? ', (searchItem) => {
        const item = groceryList.find(item => item.itemName.toLowerCase() === searchItem.toLowerCase());
        if (item && item.bought === false) {
            item.bought = true;
            console.log(`\n${searchItem} was successfully purchased.`);
        } else if (item && item.bought === true) {
            console.log(`\nYou have already purchased ${searchItem}.`);
        } else {
            console.log(`\n${searchItem} is not in your grocery list.`);
        }
        directory();
    });
}

const directory = () => {
    console.log('\n----------------------------------------------------\n');
    rl.question(`\nChoose from the following options:
        \nPress 1 to display your current grocery list 
        \nPress 2 to add an item to your list 
        \nPress 3 to remove an item from your list 
        \nPress 4 to buy an item from the list 
        \nPress 5 to exit
        \nChoice: `, (option) => {
            switch(option) {
                case '1':
                    displayGroceryList(groceryList);
                    break;
                case '2':
                    addItem();
                    break;
                case '3':
                    removeItem();
                    break;
                case '4':
                    buyItem();
                    break;
                case '5':
                    break;
                default:
                    console.log('\ninvalid choice.')
                    directory();
            }
            rl.question('\nAre you sure you want to leave? Type 1 for yes and 2 for no. ', (answer) => {
                if (answer === '2'){
                    directory();
                } else {
                    console.log('\nHave a great day!');
                    rl.close();
                }
            });
        });
}

// start the app
console.log('\nWelcome to Grocer, an online tool to help with all your shopping needs.\n');
directory();

