def solution(arr, n):
    answer = []
    if len(arr) % 2 == 1:  # arr 길이가 홀수라면
        for i in range(len(arr)):
            if i % 2 == 0:     # 짝수 인덱스
                answer.append(arr[i] + n)
            else:
                answer.append(arr[i])
    else:  # arr 길이가 짝수라면
        for i in range(len(arr)):
            if i % 2 == 1:     # 홀수 인덱스
                answer.append(arr[i] + n)
            else:
                answer.append(arr[i])
    return answer
