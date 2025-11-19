arr = [12,24,35,24,88,120,155,88,120,155]
result = []
arr_list = [result.append(i) for i in arr if i not in result]
print(result)