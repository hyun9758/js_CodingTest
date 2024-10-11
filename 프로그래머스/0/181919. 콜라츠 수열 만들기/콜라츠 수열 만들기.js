function solution(n) {
    let sequence = [n]; // n을 첫 번째 원소
    
    while (n !== 1) {
        if (n % 2 === 0) {
            n /= 2;
        } else {
            n = 3 * n + 1;
        }
        sequence.push(n);
    }
    
    return sequence;
}