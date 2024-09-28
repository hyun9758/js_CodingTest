function solution(num_str) { 
    let sum = 0;
    for (let i=0; i < num_str.length; i++) {
        sum += parseInt(num_str[i], 10)
    }
    return sum;
}

// parseInt(string, radix) 몇 진수로 문자열을 정수로 변환
