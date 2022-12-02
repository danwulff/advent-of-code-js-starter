const { day1 } = require("./day1");

let input = `replace me
some input string to mimic
the input files

`;

test("day1", () => {
  expect(day1(input)).toBe(null);
});
