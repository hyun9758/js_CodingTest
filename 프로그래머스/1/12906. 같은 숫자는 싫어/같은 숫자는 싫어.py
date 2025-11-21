def solution(arr):
    answer = []
    
    if arr:
        answer.append(arr[0])
        
    for i in range(1, len(arr)):
        if arr[i] != arr[i-1]:
            answer.append(arr[i])
            
    return answer