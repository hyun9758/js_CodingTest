function solution(n) {
    var answer = [];
    let index = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            answer[index] = i;
            index++;
            //answer.push(i) 사용시 바로 추가 가능해진다.
        }
    }
    return answer;
}