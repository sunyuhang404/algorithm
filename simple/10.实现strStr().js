/** 
 * 实现 strStr()
 * 
 * KMP 算法
 * 
 * 给你两个字符串 haystack 和 needle ，
 * 请你在 haystack 字符串中找出 needle 字符串出现的第一个位置（下标从 0 开始）。
 * 如果不存在，则返回  -1 。
 * 
 * 输入: haystack = "hello", needle = "ll"
 * 输出: 2
 */
const func = (haystack, needle) => {
  if (haystack === '' || needle === '') return 0;
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      if (haystack.substring(i, i + needle.length) === needle) {
        return i;
      }
    }
  }
  return -1;
};
const res = func('he1llo', 'll');
console.log(res);