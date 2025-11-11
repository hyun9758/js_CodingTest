def solution(keyinput, board):
    move = {
        'up':    (0, 1),
        'down':  (0, -1),
        'left':  (-1, 0),
        'right': (1, 0)
    }
    
    x_limit = board[0] // 2
    y_limit = board[1] // 2
    x, y = 0, 0

    for key in keyinput:
        dx, dy = move[key]
        nx, ny = x + dx, y + dy

        if -x_limit <= nx <= x_limit and -y_limit <= ny <= y_limit:
            x, y = nx, ny

    return [x, y]