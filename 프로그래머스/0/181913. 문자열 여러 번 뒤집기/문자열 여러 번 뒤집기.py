def solution(my_string, queries):
    s_list = list(my_string)
    
    for s, e in queries:
        s_list[s: e+1] = s_list[s:e+1][::-1]
        
    return "".join(s_list)