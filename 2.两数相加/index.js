
function ListNode(val) {
  this.val = val ? val : 0;
  this.next = null;
}

const add = (l1, l2) => {
  const head = new ListNode(0);
  let quick = head;
  let t = 0;
  while (l1 || l2) {
    x = l1 ? l1.val : 0;
    y = l2 ? l2.val : 0;
    const sum = x + y + t;
    t = sum > 9 ? 1 : 0;
    quick.next = new ListNode(sum % 10);
    quick = quick.next;
  }
  if (t) {
    quick.next = new ListNode(t);
  }
  return head.next;
}