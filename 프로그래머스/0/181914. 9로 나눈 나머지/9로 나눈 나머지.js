function solution(number) {
    // reduce(): 각 요소에 대해 주어진 함수 실행
    // sum에 배열의 각 문자를 더해서 누적하는 방법
    const sumOfDigits = number.split('').reduce((sum, digit) => sum + Number(digit), 0);
    
    // 그 합을 9로 나눈 나머지를 반환
    return sumOfDigits % 9;
}
