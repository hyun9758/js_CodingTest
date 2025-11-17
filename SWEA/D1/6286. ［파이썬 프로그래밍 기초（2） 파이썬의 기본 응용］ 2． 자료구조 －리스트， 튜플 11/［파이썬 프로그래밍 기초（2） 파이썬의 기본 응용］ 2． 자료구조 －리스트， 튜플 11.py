a = [1, 1]

for i in range(1, 9):
    a.append(a[i-1] + a[i])

print(a)