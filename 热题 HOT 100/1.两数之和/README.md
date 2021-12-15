
# 两数之和
给定一个整数数组 nums 和目标值 target
在数组中找出 和为目标值的那两个数字, 并返回它们的数组下标

## eg:

### demo1
输入：nums = [2, 7, 11, 15], target = 9

输出：[0, 1]

解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。

### demo2
输入：nums = [3, 2, 4], target = 6

输出：[1, 2]

输入：nums = [3, 3], target = 6

输出：[0, 1]

# 思路
需要借用 Map

遍历数组，将每个元素以 [element, i] 的形式保存到 map 中

每次循环到 map 中查找 target - nums[i] 的结果在 map 中是否存在

如果存在，就返回 map 中该元素的 value 和 当前元素的索引