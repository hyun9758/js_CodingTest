def solution(myStr):
    answer = []
    current = ""           # 문자열로 모으기

    for ch in myStr:
        if ch in "abc":    
            if current:    # 지금까지 모인 게 있으면
                answer.append(current)
                current = ""
        else:
            current += ch 

    if current:
        answer.append(current)


    if not answer:
        return ["EMPTY"]

    return answer