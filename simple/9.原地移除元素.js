/** 
 * 原地移除元素
 * 
 * 给你一个数组 nums 和一个值 val，
 * 你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。
 * 不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。
 * 元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。
 * 
 * 输入：nums = [3,2,2,3], val = 3
 * 输出：2, nums = [2,2]
 * 
 * 输入：nums = [0,1,2,2,3,0,4,2], val = 2
 * 输出：5, nums = [0,1,4,0,3]
 */
const func = (nums, val) => {
  let len = 0;
  for (let i = 0; i < nums.length; i++) {
    if (val !== nums[i]) {
      nums[len] = nums[i];
      len++;
    }
  }
  return len;
};
const res = func([0,1,2,2,3,0,4,2], 2);
console.log(res);
