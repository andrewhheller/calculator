// create a calculator: add, multiply, subtract

const plus = (num1, num2) => {
  return num1 + num2;
}

const minus = (num1, num2) => {
  return num1 - num2;
}

const multiply = (num1, num2) => {
  return num1 * num2;
}


const calculator = (num1, operation, num2) => {
  return operation(num1, num2);
}

console.log(calculator(5, plus, 5));

module.exports = calculator;
module.exports = plus;
module.exports = minus;
module.exports = multiply;
