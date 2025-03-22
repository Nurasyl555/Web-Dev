def lone_sum(a, b, c):
  sum_ = 0
  if a != b and a != c:
    sum_ += a
  if b != a and b != c:
    sum_ += b
  if c != a and c != b:
    sum_ += c
  return sum_ 
