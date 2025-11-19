arr = [12, 24, 35, 70, 88, 120, 155]
answer = []

for i in range(len(arr)):
    if i % 2 == 1:
        answer.append(arr[i])

print(answer)