def solution(arr, intervals):
    [a1, b1] , [a2, b2] = intervals
    
    first = arr[a1 : b1 + 1]
    second = arr[a2 : b2 + 1]
    
    return first + second