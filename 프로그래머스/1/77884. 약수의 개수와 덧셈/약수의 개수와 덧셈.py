import math

def solution(left, right):
    total_sum = 0
    for num in range(left, right + 1):
        if int(math.sqrt(num))**2 == num:
            total_sum -= num
        else:
            total_sum += num
            
    return total_sum