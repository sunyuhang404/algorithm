/** 
 * 整数反转
 * 
 * 给一个 32 位有符号整数 x, 返回将 x 中的数字反转后的结果
 * 如果反转后整数超过 32 有符号整数的范围 [-2^31, 2^31 - 1] 就返回0
 * eg:
 * 输入: x = 321
 * 输出: 123
 * 
 * 输入: x = -123
 * 输出: -321
 * 
 * 输入: x = 120
 * 输出: 21
 * 
 * 输入: 0
 * 输出: 0
*/

/**
 * 利用数组 reverse 实现
 */
const func1 = x => {
  let res = parseInt(String(x).split('').reverse().join(''));
  const min = -Math.pow(2, 31);
  const max = Math.pow(2, 31) - 1;
  if (res < 0) {
    res = -res;
  }
  // 判断是否越界
  return res > max || res < min ? 0 : res;
};
// const res = func1(123);
// console.log(res);

/**
 * 位运算
 * 通过取余得到的值作为 res 的第一位
 * 依次类推
 * 每次都给 res 乘 10 移位
 * 最后再让 x 除以 10, 利用 ~~ 来取整: 双非取整
 */
const func2 = x => {
  let res = 0;
  const max = Math.pow(2, 31) - 1;
  const min = Math.pow(-2, 31);
  while (x) {
    console.log('*********');
    res = res * 10 + x % 10;
    // 判断越界
    if (res > max || res < min) {
      return 0;
    }
    // 除以 10 然后取整, 就移位了
    x = ~~(x / 10);
  }
  return res;
}
const res2 = func2(123);
console.log(res2);

