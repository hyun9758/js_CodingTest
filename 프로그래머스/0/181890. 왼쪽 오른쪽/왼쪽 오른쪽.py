def solution(str_list):
    
    for i in range(len(str_list)):
        current = str_list[i]
        
        if current == "l":
            return str_list[:i]
        
        elif current == "r":
            return str_list[i+1:]
    
    return []