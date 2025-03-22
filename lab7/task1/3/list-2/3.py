def centered_average(nums):
  nums.sort()
  sums = sum(nums) - nums[-1] - nums[0]
  return sums //(len(nums)-2)
