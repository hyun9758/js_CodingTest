function solution(num, k) {
    const numStr = num.toString();
    const kStr = k.toString();
    
    for (let i = 0; i<= numStr.length ; i++) {
        if (numStr[i] === kStr) {
            return i + 1;
            // 자릿수는 1부터 시작함.
        }
    }
    return -1;
}