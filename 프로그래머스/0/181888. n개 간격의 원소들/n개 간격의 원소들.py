def solution(num_list, n):
    answer = []
    
    for num in num_list:
        answer = num_list[0:len(num_list):n]
    return answer