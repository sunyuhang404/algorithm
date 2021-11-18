/** 
 * 两数之和
 * 给定一个整数数组 nums 和目标值 target
 * 在数组中找出 和为目标值的那两个数字, 并返回它们的数组下标
 * eg:
 * 输入：nums = [2, 7, 11, 15], target = 9
 * 输出：[0, 1]
 * 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
 * 
 * 输入：nums = [3, 2, 4], target = 6
 * 输出：[1, 2]
 * 
 * 输入：nums = [3, 3], target = 6
 * 输出：[0, 1]
*/

const func = (nums, target) => {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i]
    } else {
      map.set(nums[i], i);
    }
  }
};

const res = func([2, 11, 7, 15], 9);
console.log(res);