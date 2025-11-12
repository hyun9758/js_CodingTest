def solution(a, b):
    add = str(a) + str(b)
    multi = 2 * a * b
    
    if int(add) > multi:
        return int(add)
    else:
        return multi