/**
 * 最长公共前缀
 * 
 * 查找字符串数组中的最长公共前缀, 如果不存在公共前缀, 就返回空字符串
 * 
 * 输入: ['flower', 'flow', 'flight']
 * 输出: 'fl
 * 
 * 输入: ['dog', 'racecar', 'car]
 * 输出: ''
 */

/**
 * 随便找一个元素, 开始遍历这个字符串
 * 然后检查数组中的元素是不是以这个字符开头的
 */
const func1 = arr => {
  if (arr.length === 0 || arr === null) {
    return '';
  }
  let res = ''
  for (const char of arr[0]) {
    if (!arr.every(str => str.startsWith(`${res}${char}`))) {
      break;
    }
    res += char;
  }
  return res;
}
// const res1 = func1(['flower', 'flow', 'flight']);
// console.log(res1);


/**
 * 分裂数组, 每次计算两个字符串的最大公共前缀
 */
const func2 = (arr) => {
  if (arr.length === 0 || arr === null) {
    return '';
  }
  return prefixRec(arr);
};
const prefixRec = (arr) => {
  let length = arr.length;
  if (length === 1) {
    return arr[0];
  }
  let mid = Math.floor(length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid, length);
  console.log('******************: ', left, right)
  return prefixStr(prefixRec(left), prefixRec(right));
}

// 求两个字符串最长公共前缀
const prefixStr = (str1, str2) => {
  let i = 0;
  for (; i < str1.length && i < str2.length; i++) {
    if (str1.charAt(i) !== str2.charAt(i)) {
      break;
    }
  }
  return str1.substring(0, i);
}
const res2 = func2('flower', 'flow', 'flight');
// console.log(res2);
