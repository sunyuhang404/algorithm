/**
 * 合并两个有序的链表
 * 
 * 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
 * 
 * 输入: l1 = [1,2,4], l2 = [1,3,4]
 * 输出: [1,1,2,3,4,4]
 * 
 * 输入: l1 = [], l2 = []
 * 输出: []
 * 
 * 输入: l1 = [], l2 = [0]
 * 输出: [0]
 */
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

const func = (l1, l2) => {
  const dummy = new ListNode(-1);
  let p = dummy;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      p.next = l1;
      l1 = l1.next;
    } else {
      p.next = l2;
      l2 = l2.next;
    }
    p = p.next;
  }
  p.next = l1 ? l1 : l2;
  return dummy.next;
}

const l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(4);

const l2 = new ListNode(1);
l2.next = new ListNode(3);
l2.next.next = new ListNode(4);

const res = func(l1, l2);
console.log(res);