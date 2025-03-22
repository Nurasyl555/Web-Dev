n = int(input())
mass = list(map(int, input().split()))
no_yes = "NO"
for i in range(1, n):
    if (mass[i-1] > 0 and mass[i] > 0) or (mass[i-1] < 0 and mass[i] < 0):
        no_yes ="YES"
        break
print(no_yes)