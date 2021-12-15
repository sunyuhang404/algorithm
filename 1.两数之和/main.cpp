
#include <vector>
#include <map>

using std::vector;
using std::map;

vector<int> add(vector<int>& nums, int target) {
  map<int, int> obj;
  vector<int>res = {-1, -1};

  for (int i = 0; i < nums.size(); i++) {
    if (obj.count(target - nums[i]) > 0) {
      res[0] = obj[target - nums[i]];
      res[1] = i;
      break;
    }
    obj[nums[i]] = i;
  }
}

int main() {
  
  return 0;
}