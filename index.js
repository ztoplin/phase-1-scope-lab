// Write your solution in this file!
var customerName = 'bob';

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
    return customerName; 
}

function setBestCustomer() {
    bestCustomer = 'not bob'
    return bestCustomer
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'
    return bestCustomer
}

const leastFavoriteCustomer = 'tre'

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'doug'
    return leastFavoriteCustomer
}