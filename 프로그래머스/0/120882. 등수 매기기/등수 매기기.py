def solution(score):
    avg = [( a + b) / 2 for a, b in score]
    return [sum(i < j for j in avg) + 1 for i in avg]