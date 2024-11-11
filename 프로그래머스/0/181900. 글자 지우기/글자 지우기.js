function solution(my_string, indices) {
    let result = '';
    
    const indexSet = new Set(indices);
    
    for (let i = 0; i < my_string.length; i++) {
        if (!indexSet.has(i)) {
            result += my_string[i];
        }
    }
    
    return result;
}