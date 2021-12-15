
const subLen = str => {
  const arr = [];
  let max = 0;

  for (let i = 0; i < str.length; i++) {
    if (arr.indexOf(str[i]) !== -1) {
      arr.splice(0, arr.indexOf(str[i]) + 1);
    }
    arr.push(str[i]);
    max = Math.max(max, arr.length);
  }
  return max;
}