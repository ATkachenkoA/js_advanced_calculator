'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
  let result = 0;

  const calculator = {
    result: result,

    add(number) {
      result += number;
      calculator.result = result;

      return calculator;
    },

    subtract(number) {
      result -= number;
      calculator.result = result;

      return calculator;
    },

    divide(number) {
      result /= number;
      calculator.result = result;

      return calculator;
    },

    multiply(number) {
      result *= number;
      calculator.result = result;

      return calculator;
    },

    operate(action, number) {
      action(number);

      return calculator;
    },

    reset() {
      result = 0;
      calculator.result = result;

      return calculator;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
