def solution(s):
    words = s.split(" ")
    jaden_words = [i.capitalize() for i in words]
    answer = " ".join(jaden_words)
    return answer