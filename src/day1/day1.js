function day1(input) {
  dataArray = input.replaceAll('\r','').split('\n');
  var sortedArray = [];
    var currCount = 0;
    var elf = 1;
    for (line of dataArray) {
        if (line == '') {
            sortedArray.push({"elf":elf,"count": currCount});
            currCount = 0;
            elf++;
        } else {
            currCount += parseInt(line);
        }
    }
    sortedArray.push({"elf":elf,"count": currCount});
    sortedArray.sort(function(a,b){return b.count-a.count});
    const sum = sortedArray.slice(0,3).reduce((partialSum, a) => partialSum + a.count, 0);
  return {
    partOne: `elf ${sortedArray[0].elf} had the most with a total of ${sortedArray[0].count}`,
    partTwo: `elves ${sortedArray[0].elf}, ${sortedArray[1].elf} and ${sortedArray[2].elf} were the top 3 with a combined total of ${sum}`,
  };
}

module.exports = {
  day1,
  // Note: you can add helper functions for testing within .test.js here if you wish
};
