def solution(s):
    char_list = list(s)
    char_list.sort(reverse=True)
    
    return "".join(char_list)