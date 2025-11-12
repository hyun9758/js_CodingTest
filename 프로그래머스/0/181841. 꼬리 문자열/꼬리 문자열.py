def solution(str_list, ex):
    answer = ""
    for c in str_list:
        if ex not in c:
            answer += c
    return answer
        