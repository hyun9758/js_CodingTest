def solution(number):
    sum = 0
    count = 0
    N = len(number)
    
    for i in range(0, N-2):
        for j in range(i+1, N-1):
            for k in range(j+1, N):
                sum = number[i] + number[j] + number[k]
                if sum == 0: 
                    count += 1
    return count