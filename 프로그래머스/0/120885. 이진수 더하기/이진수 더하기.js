function solution(bin1, bin2) {
    // 이진수 문자열을 십진수로 변환
    const num1 = parseInt(bin1, 2);
    const num2 = parseInt(bin2, 2);
    
    // 두 수의 합을 계산
    const sum = num1 + num2;
    
    // 합을 이진수로 변환하여 반환
    return sum.toString(2);
    
    // 2는 2진수 변환을 의미
    
}
