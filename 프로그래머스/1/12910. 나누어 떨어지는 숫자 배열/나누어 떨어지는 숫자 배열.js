function solution(arr, divisor) {
    // divisor로 나누어 떨어지는 요소를 필터링하여 새로운 배열 생성
    let result = arr.filter(num => num % divisor === 0);

    // 배열이 비어있으면 -1을 담은 배열 반환
    if (result.length === 0) {
        return [-1];
    }

    // 오름차순으로 정렬 후 반환
    return result.sort((a, b) => a - b);
}
