n = int(input())
mass = list(map(int, input().split()))
tt = 0
for i in range(1, n):
    if mass[i] > mass[i-1]:
        tt += 1
print(tt)