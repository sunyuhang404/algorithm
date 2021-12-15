
def subLen(s):
  dic = {}
  i = 0
  res = -1

  # i 是左指针，j 是右指针
  for j in range(len(s)):
    # 如果元素出现过，更新左指针
    if s[j] in dic:
      # 如果之前出现的元素在左右指针中间，更新左指针
      # 如果不在中间，左指针不变
      i = max(i, dic[s[j]])
    dic[s[j]] = j
    res = max(res, j - i)

  return res

print(subLen("abcda"))