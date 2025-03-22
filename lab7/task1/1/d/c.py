a = int(input())
mass = list(map(int, input().split()))
total = 0
for i in mass:
    if i > 0 :
        total += 1

print(total)