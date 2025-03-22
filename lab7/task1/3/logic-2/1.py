def make_bricks(small, big, goal):
  max_big_used = min(goal//5, big)
  reman = goal - max_big_used*5
  return reman <= small
