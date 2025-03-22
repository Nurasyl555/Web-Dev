deci = int(input())
hhh = ""
while deci > 0:
    nn = str(deci % 2)
    hhh += nn
    deci //=2
print(hhh)