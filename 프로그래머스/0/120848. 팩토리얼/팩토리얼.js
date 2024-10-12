function solution(n) {
    let factorial = 1;  
    let i = 1;         

    // i를 증가시키며 팩토리얼을 구해 n과 비교
    while (true) {
        if (factorial > n) {
            // n보다 크면 직전의 i-1을 반환
            return i - 1;
        }
        i++; 
        factorial *= i;  
    }
}
