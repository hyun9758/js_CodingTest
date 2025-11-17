depth = 2
rows = 3
cols = 4

three_d_array = [
    [
        [0 for col in range(cols)]
        for row in range(rows)
    ]
    for depth in range(depth)
]

print(three_d_array)