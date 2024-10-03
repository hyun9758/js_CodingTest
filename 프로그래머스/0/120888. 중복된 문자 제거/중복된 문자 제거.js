function solution(my_string) {
    let uniqueChars = ''; // 중복되지 않은 문자를 담을 변수
    
    for (let char of my_string) {
        if (!uniqueChars.includes(char)) { // 중복된 문자가 아니면
            uniqueChars += char;           // uniqueChars에 추가
        }
    }
    
    return uniqueChars; // 중복이 제거된 문자열 반환
}
