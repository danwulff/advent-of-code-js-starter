const { readFileSync } = require("fs");
const { day1 } = require("./src/day1/day1.js");

const daysToRun = [
  day1,
  // add additional days here
];

daysToRun.forEach((day) => {
  const name = day.name;
  const input = readFileSync(`./inputs/${name}`).toString();
  console.log(`${name}:`, day(input));
});
