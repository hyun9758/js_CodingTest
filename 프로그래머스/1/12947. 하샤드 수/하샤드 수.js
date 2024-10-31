function solution(x) {
    let sum = 0;
    let num = x;
    
    while (num > 0) {
        sum += num % 10; // 가장 오른쪽 자릿수 더하기
        num = Math.floor(num / 10); // 한 자리씩 줄이기
    }
    
    return x % sum === 0;
}