function solution(order) {
    const strOrder = String(order);
    
    let clapCount = 0;
    for (let char of strOrder) {
        if (char === '3' || char === '6' || char === '9') {
            clapCount++;
        }
    }
    return clapCount;
}