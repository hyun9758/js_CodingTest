def solution(board, k):
    total = 0
    n = len(board)
    m = len(board[0])
    
    for i in range(n):
        for j in range(m):
            if i + j <= k:
                total += board[i][j]
    return total
        