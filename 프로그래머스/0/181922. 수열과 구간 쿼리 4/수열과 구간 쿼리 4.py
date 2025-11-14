def solution(arr, queries):
    for i in range(len(queries)):
        [s, e, k] = queries[i]
        for a in range(s, e+1):
            if a % k == 0:
                arr[a] += 1
    return arr