function solution(arr) {
    let result = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 50 && arr[i] % 2 === 0) {
            result.push(arr[i] / 2); // 50 이상인 짝수는 2로 나눔
        } else if (arr[i] < 50 && arr[i] % 2 !== 0) {
            result.push(arr[i] * 2); // 50 미만인 홀수는 2로 곱함
        } else {
            result.push(arr[i]); // 나머지 경우는 그대로 유지
        }
    }
    
    return result;
}