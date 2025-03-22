def front3(str):
  if len(str) < 3:
    return str[:len(str)+1]*3
  new_str = str[:3]*3
  return new_str
print(front3(''))