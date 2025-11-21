def solution(s):
    transform_count = 0
    zero_sum = 0
    
    while s != "1":
        transform_count += 1
        current_zeros = s.count('0')
        zero_sum += current_zeros
        s_without_zeros = s.replace('0', '')
        c = len(s_without_zeros)
        s = bin(c)[2:]
        
    return [transform_count, zero_sum]