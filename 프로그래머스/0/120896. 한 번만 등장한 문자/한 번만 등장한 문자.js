function solution(s) {
    let frequency = {};
    
    // s를 순환하며 빈도 계싼 
    for (let char of s) {
        frequency[char] = (frequency[char] || 0) + 1;
    }
    
    // 1인 문자만 필터링 
    let result = Object.keys(frequency).filter(char => frequency[char] === 1).sort();
    
    // 사전순 정렬
    return result.join('');
}