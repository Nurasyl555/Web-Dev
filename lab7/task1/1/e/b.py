def power(a, n):
    return a**n
a, n = input().split()
print(power(float(a), int(n)))