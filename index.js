// Write your solution in this file!
// declare customerName to be bob in global scope
var customerName = "bob";
// modifies the customerName variable
function upperCaseCustomerName(name) {
  var name = customerName.toUpperCase();
  return (customerName = name);
}

function setBestCustomer() {
  bestCustomer = "not bob";
  return bestCustomer;
}

function overwriteBestCustomer() {
  bestCustomer = "maybe bob";
  return bestCustomer;
}

const leastFavoriteCustomer = "Karen";
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "Bob";
  return leastFavoriteCustomer;
}
