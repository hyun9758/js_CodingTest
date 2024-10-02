function solution(myString, pat) {
    var answer = '';
    
    for (let i=0; i < myString.length; i++) {
        if (myString[i] === 'A') {
            answer += 'B';
        } else if (myString[i] === 'B') {
            answer += 'A';
        }
    }
    return answer.includes(pat) ? 1 : 0;
}