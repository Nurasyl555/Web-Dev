def make_chocolate(small, big, goal):
  big_used = min(goal/5, big)
  reman = goal - big_used*5
  if reman <= small:
    return reman
  else:
    return -1
def double_char(str):
  dd = ""
  for i in str:
    dd += i*2
  return dd