// 1. Declare customerName in global scope
var customerName = 'bob';

// 2. Function to uppercase customerName
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

// 3. Function to set bestCustomer
function setBestCustomer() {
    window.bestCustomer = 'not bob';
}

// 4. Function to overwrite bestCustomer
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

// 5. Declare leastFavoriteCustomer as a constant
const leastFavoriteCustomer = 'some value';

// Function to try changing leastFavoriteCustomer
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'new value';
}

// Exporting the functions if needed (in case of module usage)
module.exports = {
    upperCaseCustomerName,
    setBestCustomer,
    overwriteBestCustomer,
    changeLeastFavoriteCustomer
};
