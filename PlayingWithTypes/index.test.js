const { stringToNumber, flipBoolean, whatAmI, isItTruthy } = require("./index");

describe("stringToNumber", () => {
  it('should convert string "123" to number 123', () => {
    expect(stringToNumber("123")).toBe(123);
  });

  it('should return "Not a number" for invalid numeric string "abc"', () => {
    expect(stringToNumber("abc")).toBe("Not a number");
  });

  it("should handle empty string correctly", () => {
    expect(stringToNumber("")).toBe(0);
  });

  it("should handle whitespace string correctly", () => {
    expect(stringToNumber("  ")).toBe(0);
  });
});

describe("flipBoolean", () => {
  it("should flip true to false", () => {
    expect(flipBoolean(true)).toBe(false);
  });

  it("should flip 0 to true", () => {
    expect(flipBoolean(0)).toBe(true);
  });

  it("should flip empty string to true", () => {
    expect(flipBoolean("")).toBe(true);
  });

  it("should flip non-empty string to false", () => {
    expect(flipBoolean("non-empty")).toBe(false);
  });
});

describe("whatAmI", () => {
  it('should return "I\'m a number!" for input 123', () => {
    expect(whatAmI(123)).toBe("I'm a number!");
  });

  it('should return "I\'m a string!" for input "hello"', () => {
    expect(whatAmI("hello")).toBe("I'm a string!");
  });

  it("should handle boolean inputs", () => {
    expect(whatAmI(true)).toBe("I'm of type boolean!");
  });

  it("should handle object inputs", () => {
    expect(whatAmI({})).toBe("I'm of type object!");
  });
});

describe("isItTruthy", () => {
  it('should return "It\'s truthy!" for non-zero number 123', () => {
    expect(isItTruthy(123)).toBe("It's truthy!");
  });

  it('should return "It\'s falsey!" for null', () => {
    expect(isItTruthy(null)).toBe("It's falsey!");
  });

  it('should return "It\'s falsey!" for undefined', () => {
    expect(isItTruthy(undefined)).toBe("It's falsey!");
  });

  it('should return "It\'s truthy!" for a non-empty object', () => {
    expect(isItTruthy({ key: "value" })).toBe("It's truthy!");
  });
});
