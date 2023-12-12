function solution(n) {
    let sum = 0;
    const strN = n.toString();
    
    for (let i = 0; i < strN.length; i++) {
        sum += parseInt(strN[i]);
    }
    return sum;
}