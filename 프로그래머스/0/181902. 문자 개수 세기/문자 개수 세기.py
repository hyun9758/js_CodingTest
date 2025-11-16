def solution(my_string):
    answer = [0] * 52
    
    for char in my_string:
        char_code = ord(char)
        
        if 'A' <= char <= 'Z':
            index = char_code - ord('A')
            
        elif 'a' <= char <= 'z':
            index = char_code - ord('a') + 26
            
        answer[index] += 1
        
    return answer 