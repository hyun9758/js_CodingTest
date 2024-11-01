function solution(arr) {
    const n = arr.length;
    
    // 대각선으로 접었을 때 대칭인지를 확인
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (arr[i][j] !== arr[j][i]) {
                return 0;
            }
        }
    }
    return 1;
}