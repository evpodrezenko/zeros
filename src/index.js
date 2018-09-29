module.exports = function getZerosCount(number) {
  let zerosCount = 0;
  let tempNumber = number;
 
  while (tempNumber > 0) {
    tempNumber = Math.floor(tempNumber / 5);
    zerosCount += tempNumber;
  }

  return zerosCount;
}
