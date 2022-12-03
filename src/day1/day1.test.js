const { day1 } = require("./day1");

let input = `replace me
some input string to mimic
the input files

`;

test("day1", () => {
  const result = day1(input);
  expect(result.partOne).toBe(null);
  expect(result.partTwo).toBe(null);
});
