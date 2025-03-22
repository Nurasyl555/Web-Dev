def count_evens(nums):
  ss = 0
  for i in nums:
    if i % 2==0:
      ss+=1
  return ss
