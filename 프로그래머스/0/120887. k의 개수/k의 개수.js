function solution(i, j, k) {
    let count = 0;
    let kStr = k.toString(); //  숫자 k를 문자열로 변환
    
    // i~j 문자열 순환
    for (let num = i; num <= j; num++) {
        let numStr = num.toString(); // 현재 숫자를 문자열로
        // numStr에서 kStr 숫자 세기
        for (let char of numStr) {
            if (char === kStr) {
                count++;
            }
        }
    }
    return count;
}