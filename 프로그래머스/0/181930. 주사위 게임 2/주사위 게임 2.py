def solution(a, b, c):
    s1 = a + b + c
    s2 = a*a + b*b + c*c
    s3 = a*a*a + b*b*b + c*c*c
    
    if a == b == c:
        return s1 * s2 * s3
    elif a == b or b ==c or a== c:
        return s1 * s2
    else:
        return s1