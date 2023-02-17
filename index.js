let addDays = require("date-fns/addDays");
module.exports = function (days) {
  let obj = addDays(new Date(2020, 07, 22), days);
  return `${obj.getDate()}-${obj.getMonth()}-${obj.getFullYear()}`;
};
