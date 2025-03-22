number = int(input())
num_len = 0
while(number > 0):
    num = number % 10
    num_len += num
    number //= 10
print(num_len)

