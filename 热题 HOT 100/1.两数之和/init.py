
def add(nums, target):
  map = {}
  for index, num in enumerate(nums):
    if map.get(target - num) is not None:
      return [map.get(target - num), index]
    map[num] = index

print(add([1, 2, 4, 6, 8], 3))