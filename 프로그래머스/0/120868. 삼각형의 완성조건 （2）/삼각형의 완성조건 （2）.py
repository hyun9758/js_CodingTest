def solution(sides):
    a, b = sorted(sides)          
    case1 = b - (b - a)           
    case2 = (a + b - 1) - b       
    return a + (a - 1)