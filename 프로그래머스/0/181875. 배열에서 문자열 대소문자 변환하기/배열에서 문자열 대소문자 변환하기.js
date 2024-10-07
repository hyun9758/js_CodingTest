function solution(strArr) {
    return strArr.map((str, i) => {
        if (i % 2 === 0) {
            return str.toLowerCase();
        } else {
            return str.toUpperCase();
        }
    })
}

// map 메서드를 사용해 배열의 각 요소를 변환