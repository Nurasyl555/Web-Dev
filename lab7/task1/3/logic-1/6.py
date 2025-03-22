def alarm_clock(day, vacation):
  if vacation == False:
    if 0 < day < 6:
      return '7:00'
    else :
      return '10:00'
  elif 0 < day < 6:
    return '10:00'
  else : 
    return 'off'