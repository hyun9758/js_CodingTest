function solution(numbers) {
    // 오름차순 정렬
    numbers.sort((a, b) => a - b);
    
    // 가장 큰 두 양수 또는 가장 작은 두 음수 둘다 계산
    let maxMulti1 = numbers[numbers.length - 1] * numbers[numbers.length - 2];
    let maxMulti2 = numbers[0] * numbers[1]
    
    // 더 큰 값 반환
    return  Math.max(maxMulti1, maxMulti2);
}