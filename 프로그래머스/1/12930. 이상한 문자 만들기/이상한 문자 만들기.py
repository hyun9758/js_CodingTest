def solution(s):
    words = s.split(' ')
    result = []
    
    for word in words:
        temp = ''
        for i in range(len(word)):
            if i % 2 == 0:
                temp += word[i].upper()
            else:
                temp += word[i].lower()
        result.append(temp)
    return ' '.join(result)