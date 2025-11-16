def solution(ineq, eq, n, m):
    operator = ineq + eq
    
    if operator == ">=":
        if n >= m:
            return 1
        else: 
            return 0
        
    elif operator == "<=":
        if n <= m:
            return 1
        else: 
            return 0
        
    elif operator == ">!":
        if n > m:
            return 1
        else:
            return 0
        
    elif operator == "<!":
        if n < m:
            return 1
        else: 
            return 0