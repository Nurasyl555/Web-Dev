n = int(input())
tt = 0
mass = list(map(int, input().split()))
for i in range(1, n-1):
    if mass[i-1] < mass[i] and  mass[i+1] < mass[i] :
        tt += 1
print(tt)
