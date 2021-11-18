/**
 * 回文数
 * 
 * 给定一个整数 x, 如果 x 是一个回文整数, 返回 true, 否则返回 false
 * 
 * 输入: x = 121
 * 输出: true
 * 
 * 输入: x = -121
 * 输出: false
 * 解释: 从左向右读是: -121, 从右向左读是: 121-, 所以不是回文
 */

/**
 * 双指针法
 * 如果两个指针碰撞说明是回文
 */
const func = x => {
  if (x <= 0) {
    return false;
  }
  if (x < 10) {
    return true;
  }
  const str = String(x);
  let left = 0;
  let right = str.length - 1;
  while (left <= right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left ++;
    right --;
  }
  return true;
};

const res = func(121);
console.log(res);
