function solution(arr, flag) {
    let X = [];
    
    for (let i = 0; i < flag.length; i++) {
        if (flag[i]) {
            // true일 때 arr[i]를 * 2번 X에 추가
            for (let j = 0; j < arr[i] * 2; j++) {
                 X.push(arr[i]);
            }
        } else {
            // false 인 경우 X 에서 마지막 arr[i] 개의 원소를 제거
            X.splice(X.length - arr[i], arr[i]);
        }
    }
    
    return X;
}