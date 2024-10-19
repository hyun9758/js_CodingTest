function solution(intStrs, k, s, l) {
    let result = []; 
    
    for (let str of intStrs) {
        let num = parseInt(str.slice(s, s + l));
    
        if (num > k) {
            result.push(num);
        }
    }
    
    return result;
}
