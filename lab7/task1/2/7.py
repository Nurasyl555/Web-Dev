# Enter your code here. Read input from STDIN. Print output to STDOUT
import re
s = input()
k = input()

start = 0
found = False

while True:
    match = re.search(k, s[start:])
    if not match:
        break
    found = True
    start_idx = start + match.start()
    end_idx = start + match.end() -1 
    print((start_idx, end_idx))
    
    start = start_idx + 1 
if not found:
    print((-1, -1))