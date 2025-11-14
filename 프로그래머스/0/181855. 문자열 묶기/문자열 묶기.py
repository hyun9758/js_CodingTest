def solution(strArr):
    count = {}
    for s in strArr:
        L = len(s)
        if L not in count:
            count[L] = 1
        else:
            count[L] += 1
            
    return max(count.values())