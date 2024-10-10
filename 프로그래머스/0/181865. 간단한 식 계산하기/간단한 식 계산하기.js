function solution(binomial) {
    // 문자열을 공백으로 나누어 분리
    const [a, op, b] = binomial.split(' ');
    
    // a와 b를 정수 변환
    const numA = Number(a);
    const numB = Number(b);
    
    // 연산자
    if (op === '+') {
        return numA + numB;
    } else if (op === '-') {
        return numA - numB;
    } else if (op === '*') {
        return numA * numB;
    }
}