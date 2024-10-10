function solution(a, b) {
    // a와 b가 모두 홀수
    if (a % 2 !==0 && b % 2 !== 0) {
        return a ** 2 + b ** 2;
    }
    // a와 b 중 하나만 홀수
    else if ( a % 2 !== 0 || b % 2 !== 0) {
        return 2 * (a + b);
    }
    // a와 b 모두 홀수 아님
    else {
        return Math.abs(a - b) // 차의 절댓값 반환
    }
}