n = int(input())
massiv = list(map(int, input().split()))  

print(*massiv[::2])