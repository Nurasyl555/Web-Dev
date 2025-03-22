def min_in_four(a, b, c, d):
    ab = min(a, b)
    cd = min(c, d)
    return min(ab, cd)
a, b, c, d = map(int, input().split())
print(min_in_four(a, b, c, d))