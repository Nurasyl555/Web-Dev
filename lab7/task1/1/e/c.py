def xor(x, y):
    if (x or y) and (x!=y):
        print(1)
    else :
        print(0)
x, y = map(int, input().split())
xor(x, y)