#include <iostream>

struct ListNode {
  int val;
  ListNode* next;
  ListNode() : val(0), next(nullptr) {}
  ListNode(int x) : val(x), next(nullptr) {}
  ListNode(int x, ListNode *next) : val(x), next(next) {}
};

ListNode* add(ListNode* l1, ListNode* l2) {
  auto head = new ListNode(0);
  auto quick = head;
  
  int carry = 0;
  while (l1 || l2) {
    int sum = 0;
    if (l1) {
      sum += l1->val;
      l1 = l1->next;
    }
    if (l2) {
      sum += l2->val;
      l2 = l2->next;
    }
    if (carry) {
      ++sum;
      carry = 0;
    }
    carry = sum > 9 ? 1 : 0;
    quick->next = new ListNode(sum % 10);
    quick = quick->next;
  }
  if (carry) {
    quick->next = new ListNode(carry);
  }
  return head->next;
}

int main() {
  using std::cout;
  using std::endl;

  auto head1 = new ListNode(0);
  head1->next = new ListNode(2);
  head1->next->next = new ListNode(4);
  head1->next->next->next = new ListNode(3);

  auto head2 = new ListNode(0);
  head2->next = new ListNode(5);
  head2->next->next = new ListNode(6);
  head2->next->next->next = new ListNode(4);

  auto l1 = head1->next;
  auto l2 = head2->next;

  auto res = add(l1, l2);
  cout << res->val << endl;

  return 1;
}