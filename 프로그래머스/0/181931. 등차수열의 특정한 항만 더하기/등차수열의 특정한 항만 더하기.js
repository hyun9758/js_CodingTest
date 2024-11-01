function solution(a, d, included) {
    let sum = 0;
    
    for (let i = 0; i < included.length; i++) {
        if (included[i]) {
            let term = a + i * d;
            sum += term;
        }
    }
    return sum;
}