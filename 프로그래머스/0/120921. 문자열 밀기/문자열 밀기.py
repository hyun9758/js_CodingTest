def solution(A, B):
    if len(A) != len(B):
        return -1
    if A == B:
        return 0

    p = (B + B).find(A) 
    return p if p != -1 else -1
