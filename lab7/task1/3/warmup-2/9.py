def string_match(a, b):
  sum1 = 0
  for i in range(len(a) -1):
    if a[i:i+2] == b[i:i+2]:
      sum1 += 1
  return sum1
