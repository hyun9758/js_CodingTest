function solution(message) {
    var answer = 0;
    let length = message.length
    
    for (let i = 0; i < message.length; i ++) {
        answer += 2
    }
    return answer;
}