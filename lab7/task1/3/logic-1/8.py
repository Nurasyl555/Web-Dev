def in1to10(n, outside_mode):
  if outside_mode == False and 0 < n < 11:
    return True
  elif outside_mode == True and (n <= 1 or 10 <= n):
    return True
  return False
