def xyz_there(s):
    return ".xyz" not in s and "xyz" in s or "xyz" in s.replace(".xyz", "")
