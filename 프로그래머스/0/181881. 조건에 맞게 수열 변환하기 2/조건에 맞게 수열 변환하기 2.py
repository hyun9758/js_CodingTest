def solution(arr):
    answer = 0
    
    while True:
        old_arr = arr[:]
        new_arr = []
        
        for x in old_arr:
            if x >= 50 and x % 2 == 0:
                new_arr.append(x//2)
            elif x < 50 and x % 2 == 1:
                new_arr.append(x * 2 + 1)
            else:
                new_arr.append(x)
            
        if old_arr == new_arr:
            return answer
        
        arr = new_arr
        answer += 1