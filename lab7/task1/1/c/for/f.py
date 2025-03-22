x = input()
nn = 1
for i in x[::-1]:
    if(i == '0' and nn == 1):
        print(end="")
    elif i != 0 :
        print(i, end="")
        nn = 0
