function solution(a, b) {
    // a와 b 최대 최소 비교하기
    let min = Math.min(a, b);
    let max = Math.max(a, b);
    let answer = 0;
    
    for (let i = min; i <= max; i++) {
        answer += i;
    }
    return answer;
}