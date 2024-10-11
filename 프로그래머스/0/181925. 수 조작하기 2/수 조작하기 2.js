function solution(numLog) {
    result = '';
    
    for (let i = 0; i < numLog.length; i++) {
        let diff = numLog[i] - numLog[i - 1]; // 현재값과 이전값의 차이
        if (diff === 1) {
            result += 'w';
        } else if (diff === -1) {
            result += 's';
        } else if (diff === 10) {
            result += 'd';
        } else if (diff === -10) {
            result += 'a'
        }
    }
    return result;
}