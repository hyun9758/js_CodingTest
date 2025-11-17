arr = [12, 24, 35, 70, 88, 120, 155]
result = [i for i in arr if arr.index(i) == 1 or arr.index(i) == 2 or arr.index(i) == 3 or arr.index(i) == 6]

print(result)