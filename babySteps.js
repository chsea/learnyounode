var nums = process.argv.slice(2);

var sum = nums.reduce(function(sum, i) { return sum + Number(i) }, 0);

console.log(sum);
