
#include <iostream>
#include <unordered_set>
#include <string>
#include <cmath>

using std::cout;
using std::endl;
using std::unordered_set;
using std::string;
using std::max;

int subLen(string s) {
  unordered_set<char> st;
  int j = -1;
  int res = 0;

  for (int i = 0; i < s.size(); i++) {
    if (i != 0) {
      st.erase(s[i - 1]);
    }
    while (j + 1 < s.size() && st.count(s[i + 1]) == 0) {
      st.insert(s[j + 1]);
      ++j;
    }
    res = max(res, j - i + 1);
  }
  return res;
}


int main() {
  int len = subLen("abcab");
  cout << len << endl;
  return 1;
}