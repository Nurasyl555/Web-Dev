number = int(input())
max_num = 0
min_num = 9
while(number > 0):
    num = number % 10
    if num > max_num:
        max_num = num
    if num < min_num:
        min_num = num
    number //= 10
print(min_num, max_num)

