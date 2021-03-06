
# 无重复字符的最长子串长度
给定一个字符串 s，找出其中不含有重复字符的最长子串的长度

## eg：

### demo1
输入：s = 'abcabcbb'

输出：3

解释：因为无重复字符串的最长子串是 'abc'

### demo2
输入：s = 'bbbbb'

输出：1

解释：最长子串是 b

### demo3
输入：s = 'pwwkew'

输出：3

最长子串是 wke

# 思路
滑动窗口

从起点开始遍历字符串

用两个指针分别表示字符串的左右边界，左指针是 i，右指针是 j

在每次遍历的时候，把左指针向右移动一位，表示我们将下一个字符作为开始字符 去整合子串

然后不断向右移动右指针，每次移动需要保证两个指针对应的子串没有重复的字符

如果找到重复的字符，就停止移动右指针，记录下子串的长度

在遍历结束后，就能得到最长子串的长度