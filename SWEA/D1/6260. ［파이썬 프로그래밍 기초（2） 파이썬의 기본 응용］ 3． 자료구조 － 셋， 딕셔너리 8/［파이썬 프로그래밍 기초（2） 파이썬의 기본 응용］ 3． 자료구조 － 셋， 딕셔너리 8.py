lst = list(map(str, input()))

low = 0
up = 0

for i in lst:
    if i.isalpha():
        if i == i.upper():
            up += 1
        elif i == i.lower():
            low += 1
print(f'UPPER CASE {up} \nLOWER CASE {low}')