function solution(n) {
    let count = 0;
    
    for (let i = 1; i <= n; i++) {
        let divisiorCount = 0;
        
        // i의 약수의 개수 
        for (let j = 1; j <= i; j++) {
            if ( i % j === 0) {
                divisiorCount++;
            }
        }
        
        // 약수의 개수가 3개 이상이면 합성수
        if (divisiorCount >= 3) {
            count++;
        }
    }
    
    return count;
}