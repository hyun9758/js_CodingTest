function solution(numbers, direction) {
    var answer = [];
    if (direction === "right") {
        // 배열의 마지막 요소를 맨 앞으로
        numbers.unshift(numbers.pop());
    } else if (direction === "left") {
        // 배열의 첫 번째 요소를 맨 뒤로 
        numbers.push(numbers.shift());
    }
    return numbers;
}

// numbers.pop(): 배열의 마지막 요소를 꺼냄.
// numbers.shift(): 배열의 첫 번째 요소를 꺼냄.
// numbers.unshift(): 배열의 맨 앞에 요소를 추가
// numbers.push(): 배열의 맨 뒤에 요소를 추가. 
