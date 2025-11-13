def solution(myString):
    parts = myString.split("x")
    parts = [p for p in parts if p]
    return sorted(parts)