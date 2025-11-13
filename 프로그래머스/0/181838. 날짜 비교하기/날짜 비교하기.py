def solution(date1, date2):
    
    y1, m1, d1 = date1
    y2, m2, d2 = date2
    
    if y1 != y2:
        return 1 if y1 < y2 else 0
    if m1 != m2:
        return 1 if m1 < m2 else 0
    return 1 if d1 < d2 else 0

# return 1 if date1 < date2 else 0