function solution(arr, idx) {
    // idx보다 큰 위치부터 배열을 순회
    for (let i = idx; i < arr.length; i++) {
        // 값이 1인 인덱스를 찾으면 반환
        if (arr[i] === 1) {
            return i;
        }
    }
    // 값을 찾지 못하면 -1 반환
    return -1;
}
