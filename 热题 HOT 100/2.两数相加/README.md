
# 两数相加

给定两个非空链表，表示两个非负的整数，每个数字都是按照逆序的方式存储，每个节点只能存储一个数字。

讲两个数字相加，并以相同的形式返回一个链表

输入：l1 = [2, 4, 3]，l2 = [5, 6, 4]

输出：[7, 0, 8]

解释：342 + 465 = 807

# 思路
因为链表中保存的竹子是逆序排列的，所以直接从左往右一位一位的相加就可以了
注意点：
- 每次相加之后都可能产生进位，需要保存进位
- 两个链表不一定是等长的，需要做个判断，如果节点存在的时候，取节点的 val 然后相加，如果不存在，就认为数值是 0，然后再相加