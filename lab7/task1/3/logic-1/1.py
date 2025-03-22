def cigar_party(cigars, is_weekend):
  if 40 <= cigars <= 60 and is_weekend == False:
    return True
  elif is_weekend == True and 40 <= cigars:
    return True
  else:
    return False
