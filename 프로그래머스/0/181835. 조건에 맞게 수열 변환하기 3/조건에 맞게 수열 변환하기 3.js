function solution(arr, k) {
    if (k % 2 === 1) {
        return arr.map(num => num * k);
    } else {
        return arr.map(num => num + k);
    }
}

// map() 메서드 화살표 함수로 사용 가능