function stringToNumber(input) {
  const num = Number(input);
  return isNaN(num) ? "Not a number" : num;
}

function flipBoolean(input) {
  return !Boolean(input);
}

function whatAmI(input) {
  if (typeof input === "number") {
    return "I'm a number!";
  } else if (typeof input === "string") {
    return "I'm a string!";
  }
  return `I'm of type ${typeof input}!`;
}

function isItTruthy(input) {
  return input ? "It's truthy!" : "It's falsey!";
}

module.exports = { stringToNumber, flipBoolean, whatAmI, isItTruthy };
