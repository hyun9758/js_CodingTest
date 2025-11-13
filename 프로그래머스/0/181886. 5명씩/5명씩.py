def solution(names):
    answer = []
    for s in range(0, len(names), 5):
        answer.append(names[s])
    return answer