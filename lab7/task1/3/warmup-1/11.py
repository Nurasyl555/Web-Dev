def front_back(str):
  if len(str) <= 1:
    return str
  new_str =  str[-1] + str[1:-1] + str[0]
  return new_str
