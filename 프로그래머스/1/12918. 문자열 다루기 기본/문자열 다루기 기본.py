def solution(s):
    length_condition = (len(s) == 4 or len(s) == 6)
    
    content_condition = s.isdigit()
    
    return length_condition and content_condition