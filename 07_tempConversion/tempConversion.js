const rounded = number => Math.round(number * 10) / 10;

const ftoc = function(temp) {
// c = (f - 32) * 5/9
  return rounded((number - 32) * (5/9))
};

const ctof = function(number) {
// f = c *  9/5 + 32
  return rounded(number * (9/5) + 32)
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
