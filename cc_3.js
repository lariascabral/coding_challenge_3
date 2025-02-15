// Task 1 - Product Price Management

let prices = [17.99, 19.99, 23.95, 79.95, 17.99, 38.95] ;     // Creation of prices' array
prices[6] = 45.99 ;                                           // Adding a new element to prices' array
prices.shift() ;                                              // Eliminating a duplicated price

console.log("Prices:", prices)                                // Output: Prices: 19.99, 23.95, 79.95, 17.99, 38.95, 45.99


// Task 2 - Modifying Customer Orders

let orders = [29, 50, 30, 61, 44, 12]                         // Declaration of the array
orders[2] += 5                                                // Incrasing order quantity by 5
let totalOrders = orders.reduce((sum, quantity) => sum + quantity, 0)       // Calculation of total orders

console.log("Updated Orders Quantities:", orders)            // Output: Updated Orders Quantities: (6) [29, 50, 35, 61, 44, 12]
console.log("Total Orders (count):", totalOrders)            // Output: Total Orders (count): 231


// Task 3 - Employee Performance Tracking

let employee = {
    name: "Anthony da Silva", 
    role: "CEO",
    performanceScore: 89, 
    isActive: true
} ;                                                     // Creating of employee object
employee.performanceScore = 98 ;                        // Reversing typo in the performance score
employee.prommotionElegible = false ;                   // Adding promotion eligiblility property

console.log("Employee profile:", employee) ;            /* Output: Employee profile: {name: 'Anthony da Silva', role: 'CEO', performanceScore: 98, 
                                                          isActive: true, prommotionElegible: false} */


// Task 4 - Customer Feedback Records

let feedback = [
    {
        customerName: "Alison Charles",
        feedbackText: "Thank you for such great service!",
        rating: 9,
    } ,
    {
        customerName: "Esteban Montes",
        feedbackText: "Cannot complain, nice service",
        rating: 8,
    } ,
    {
        customerName: "Danielle Rice",
        feedbackText: "Excelent installations, really like the spaces!",
        rating: 9
    } ,                                                  // Creating of customer feedback database
];

feedback.push ({
    customerName: "James Morgan", 
    feedbackText: "Didn't liked the experience.", 
    rating:6}) ;                                         // Adding negative feedback to the database.

console.log ("Feedback Records:", feedback) ;            // Output: Feedback Records: (4) [{…}, {…}, {…}, {…}]


// Task 5 - Inventory Management System

let inventory = {
    itemName: "Banner",
    stockCount: 590,
    price: 12.99,

        calculateTotalValue: function() {
            return this.stockCount * this.price        // Calculation of total value of inventory in stock
            } 
} ;                                                    // Creation of inventory details

console.log("Inventory Details:", inventory) ;         /* Output: Inventory Details: {itemName: 'Banner', stockCount: 590, 
                                                        price: 12.99, calculateTotalValue: ƒ} */
console.log("Total Value in Stock:", `$${inventory.calculateTotalValue()}`) ;     //Output: Total Value in Stock: $7664.1