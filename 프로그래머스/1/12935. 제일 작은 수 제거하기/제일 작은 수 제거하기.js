function solution(arr) {
    // 배열의 길이가 1이면 -1을 반환
    if (arr.length === 1) return [-1];
    
    // 가장 작은 수를 찾음
    const minValue = Math.min(...arr);
    
    // 배열에서 그 값을 제거한 새로운 배열을 반환
    return arr.filter(num => num !== minValue);
}
