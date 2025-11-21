def solution(s):
    for i in range(len(s)):
        if len(s) % 2 == 0:
            return s[len(s)//2-1:len(s)//2+1]
        else: 
            return s[len(s)//2]