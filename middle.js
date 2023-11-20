
const middle = function(arr) {
  let middleNum = 0;
  let middle = [];
  if (arr.length <= 2) {
    return middle;
  } else if (arr.length % 2 !== 0) {
    middleNum = Math.ceil(arr.length / 2);
    middle.push(arr[middleNum - 1]);
    return middle;
  } else {
    middleNum = arr.length / 2;
    middle.push(arr[middleNum - 1]);
    middle.push(arr[middleNum]);
    return middle;
  }
};

module.exports = middle;