function solution(n_str) {
    var answer = '';
    let foundNonZero = false;
    
    for (let i=0; i < n_str.length; i++) {
        if (n_str[i] !== '0') {
            foundNonZero = true;
        }
        if (foundNonZero) {
            answer += n_str[i];
        }
    }
    return answer;
}