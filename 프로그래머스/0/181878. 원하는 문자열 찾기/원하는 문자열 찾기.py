def solution(myString, pat):
    sortS = myString.lower()
    sortP = pat.lower()
    for s in sortS:
        if sortP in sortS:
            return 1
    return 0