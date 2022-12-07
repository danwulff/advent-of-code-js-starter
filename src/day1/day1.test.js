const { day1 } = require("./day1");

let input = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`;

test("day1", () => {
  const result = day1(input);
  expect(result.partOne).toBe(24000);
  expect(result.partTwo).toBe(45000);
});
