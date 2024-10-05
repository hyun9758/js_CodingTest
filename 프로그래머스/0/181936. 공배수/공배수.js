function solution(number, n, m) {
    return (number % n === 0 && number % m === 0) ? 1: 0;
    
    // 두 조건을 모두 만족하면 1, 하나라도 만족하지 않는다면 0
}