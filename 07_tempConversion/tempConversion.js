// rounded function breaks DRY but is necessary to pass test

const ftoc = function(temp) {
const rounded = number => Math.round(number * 10) / 10;
// c = (f - 32) * 5/9
  return rounded((temp - 32) * (5/9))
};

const ctof = function(temp) {
const rounded = number => Math.round(number * 10) / 10;
// f = c *  9/5 + 32
  return rounded(temp * (9/5) + 32)
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
