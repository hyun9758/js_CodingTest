def solution(intStrs, k, s, l):
    answer = []
    for st in intStrs:
        num = int(st[s:s+l])
        if num > k:
            answer.append(num)
    return answer