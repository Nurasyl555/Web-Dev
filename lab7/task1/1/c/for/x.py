dd = input()
len_dd = len(dd) - 1
nn = 0
for i in dd:
    if i == '1':
        nn += 2**len_dd
    len_dd -= 1   
print(nn) 