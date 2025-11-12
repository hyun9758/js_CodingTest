def solution(myString, pat):
    answer = ""
    for s in myString:
        if s == "A":
            answer += "B"
        else: 
            answer += "A"
    if pat in answer:
        return 1
    else:
        return 0