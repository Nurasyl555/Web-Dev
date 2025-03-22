if __name__ == '__main__':
    n = int(input())
arr = list(map(int, input().split()))
arr.sort(reverse=True)
max_1 = arr[0]
for i in arr:
    if max_1 > i:
        print(i)
        break
    