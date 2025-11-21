def solution(t, p):
    L = len(p)
    N = len(t)
    p_value = int(p)
    
    count = 0
    
    for i in range(N - L + 1):
        
        substring = t[i : i + L]
        substring_value = int(substring)

        if substring_value <= p_value:
            count += 1
            
    return count