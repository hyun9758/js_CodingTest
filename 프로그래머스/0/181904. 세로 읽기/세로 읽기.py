def solution(my_string, m, c):
    result = ""
    for start in range(0, len(my_string), m):
        idx = start + (c - 1)
        if idx < len(my_string):
            result += my_string[idx]
    return result
