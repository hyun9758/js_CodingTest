def solution(arr):
    two_indices = []
    for i in range(len(arr)):
        if arr[i] == 2:
            two_indices.append(i)
            
    if not two_indices:
        return [-1]
            
    first = min(two_indices)
    last = max(two_indices)
    return arr[first:last+1]
