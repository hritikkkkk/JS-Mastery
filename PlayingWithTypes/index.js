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

function deepTypeChecker(input) {
  if (Array.isArray(input)) {
    let elementsDescription = input
      .map((el) => `    - ${deepTypeChecker(el)}`)
      .join("\n");
    return `I'm an array with elements:\n${elementsDescription}`;
  }

  if (input !== null && typeof input === "object") {
    let propertiesDescription = Object.entries(input)
      .map(([key, value]) => `- ${key}: ${deepTypeChecker(value)}`)
      .join("\n");
    return `I'm an object with properties:\n${propertiesDescription}`;
  }

  switch (typeof input) {
    case "string":
      return "I'm a string!";
    case "number":
      return "I'm a number!";
    case "boolean":
      return "I'm a boolean!";
    default:
      return `I'm of type ${typeof input}!`;
  }
}

console.log(
  deepTypeChecker({
    name: "John",
    age: 25,
    address: { city: "New York", zip: 12345 },
    hobbies: ["reading", "sports"],
  })
);

module.exports = {
  stringToNumber,
  flipBoolean,
  whatAmI,
  isItTruthy,
  deepTypeChecker,
};
