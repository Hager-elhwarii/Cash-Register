// Setting a Currency Unit Object

const currencyAmountObj = {
  PENNY: 0.01,
  NICKEL: 0.05,
  DIME: 0.1,
  QUARTER: 0.25,
  ONE: 1,
  FIVE: 5,
  TEN: 10,
  TWENTY: 20,
  "ONE HUNDRED": 100,
};

let twoFixedDigit = function (value) { return Number(value.toFixed(2)); };

function checkCashRegister(price, cash, cid) {

  // Addition of all of the cash in drawer;
  let amountLeftInDrawer = cid.reduce(function (acc, _a) {
      let currency = _a[0], amount = _a[1];
      return twoFixedDigit(acc + amount);
  }, 0);

  // Getting the change that should be returned to the customer.
  let changeNeeded = twoFixedDigit(cash - price);
 
  // First case if amountLeftInDrawer is smaller than the change.
  if (amountLeftInDrawer < changeNeeded)
      return { status: "INSUFFICIENT_FUNDS", change: [] };

  // Second case if amountLeftInDrawer exactly equal the change.
  if (amountLeftInDrawer === changeNeeded)
      return { status: "CLOSED", change: cid };

  var change = cid.reduceRight(function (acc, _a) {
      let currency = _a[0], amount = _a[1];

      if (changeNeeded < currencyAmountObj[currency])
          return acc;

     // Setting the amount value to another variable so the amount value won't be affected.   
      let availableFromCurrency = amount;

    // if the change is greater or equal to currencyAmountObj (key => value) and it's doesn't eqaul zero.
      while (changeNeeded >= currencyAmountObj[currency] &&
          availableFromCurrency > 0) {
          // Substract form the change.
          changeNeeded = twoFixedDigit(changeNeeded - currencyAmountObj[currency]);

          // Subtract from the amount.
          availableFromCurrency = twoFixedDigit(availableFromCurrency - currencyAmountObj[currency]);
      }
      
      acc.push([currency, twoFixedDigit(amount - availableFromCurrency)]);
      return acc;
  }, []);

  // If the change is equal to zero it will return an object with a status: "OPEN"
  if (!changeNeeded) {
      return {
          status: "OPEN",
          change: change,
      };
  }
  // If not it will return an object with a status: "INSUFFICIENT_FUNDS"
  return {
      status: "INSUFFICIENT_FUNDS",
      change: [],
  };
}
// {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}
