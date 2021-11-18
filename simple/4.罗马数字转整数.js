/**
 * 罗马数字转整数
 * 
 * 罗马数字包含以下 7 种字符
 *
 * I: 1
 * V: 5
 * X: 10
 * L: 50
 * C: 100
 * D: 500
 * M: 1000
 * 
 * 例如: 数字 2 罗马数字写作 II, 12 就是 XII, 27 是 XXVII
 * 通常情况 罗马数字中小的数字在大数的右边, 但也有特例, 4 就是 IV, 1 在 5 的左边, 表示大数减去小数
 * 同样 9 是 IX
 * 这个特殊的规则适用于以下6种情况
 * I: 可以放在 V 和 X 的左边, 表示 4 和 9
 * X: 可以放在 L 和 C 的左边, 表示 40 和 99
 * C: 可以放在 D 和 M 的左边, 表示 400 和 900
 * 
 * 给定一个罗马数字, 转换成整数
 * 
 * 输入: III
 * 输出: 3
 * 
 * 输入: IV
 * 输出: 4
 * 
 * 输入: IX
 * 输出: 9
 * 
 * 输入: LVIII
 * 输出: 58
 * 解释: 50 + 5 + 3
 * 
 * 输入: MCMXCIV
 * 输出: 1994
 * 解释: M = 1000, CM = 900, XC = 90, IV = 4
 */
const func = (str) => {
  const obj = {
    I : 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000
  };
  let num = 0;
  let i = 0;
  while (i < str.length) {
    if (i + 1 < str.length && obj[str.substring(i, i + 2)]) {
      num = num + obj[str.substring(i, i + 2)];
      i = i + 2;
    } else {
      num = num + obj[str.substring(i, i + 1)];
      i = i + 1;
    }
  }
  return num;
};

const res = func('MCMXCIV');
console.log(res);

