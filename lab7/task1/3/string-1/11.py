def left2(str):
  if len(str) < 3:
    return str
  return str[2:] + str[:2]
