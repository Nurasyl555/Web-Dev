def last2(str):
  if len(str) < 2:
    return 0
  last2_sub = str[-2:]
  count  = 0
  for i in range(len(str) - 2):
    if last2_sub == str[i:i+2]:
      count += 1
  return count