def solution(num_list):
    sum = 0
    time = 1
    
    if len(num_list) >= 11:
        for i in num_list:
            sum += i
        return sum
    else:
        for i in num_list:
            time *= i
        return time