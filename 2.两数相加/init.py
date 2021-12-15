
class ListNode:
  def __init__(self, val=0, next=None) -> None:
    self.val = val
    self.next = next;

def add(l1, l2):
  quick = head = ListNode()
  t = 0
  
  while l1 or l2:
    x = l1.val if l1 else 0
    y = l2.val if l2 else 0

    sum = x + y + t
    t = sum // 10

    quick.next = ListNode(sum % 10)
    quick = quick.next

    if l1 : l1 = l1.next
    if l2 : l2 = l2.next
  if t : quick.next = ListNode(t)
  return head.next