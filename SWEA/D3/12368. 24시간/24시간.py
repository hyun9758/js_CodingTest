t = int(input())

for i in range(1, t+1):
    a, b = map(int, input().split())
    result = a + b
    answer = result % 24
    print(f"#{i} {answer}")