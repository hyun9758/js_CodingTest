t = int(input())

for i in range(1, t+1):
    L, U, X = map(int, input().split())
    answer = 0
    if X > U:
        answer = -1
    elif X < L:
        answer = L - X
    else:
        answer = 0
    
    print(f"#{i} {answer}")