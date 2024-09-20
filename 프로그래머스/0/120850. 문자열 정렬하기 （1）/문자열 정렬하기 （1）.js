function solution(my_string) {
    // 문자열에서 숫자만 추출하여 배열로 변환
    const digits = my_string.match(/\d/g).map(Number);
    
    // 추출한 숫자를 오름차순 정렬
    digits.sort((a, b) => a - b);
    
    return digits;
}
