function solution(n, k) {
    var answer = [];
    for (let i = 1; i * k <= n; i++) {
        answer.push(k * i); // 배열의 끝에 값을 추가
    }
    return answer;
}