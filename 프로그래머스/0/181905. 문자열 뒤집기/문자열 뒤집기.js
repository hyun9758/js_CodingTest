function solution(my_string, s, e) {
    // 앞부분
    let front = my_string.slice(0, s);
    // 뒤집을 부분 (s부터 e까지)
    let middle = my_string.slice(s, e + 1).split('').reverse().join('');
    // 뒷부분
    let back = my_string.slice(e+1);
    
    return front + middle + back;
    
}