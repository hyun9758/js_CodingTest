function solution(strArr) {
    const lengthGroups = {}; // 1. 문자열 길이를 키로 사용하는 객체 생성
    
    // 2. 각 문자열을 순회하면서 길이를 기준으로 그룹화
    for (let str of strArr) {
        const length = str.length; // 각 문자열의 길이를 구함
        
        // 3. 해당 길이의 문자열 개수를 저장 또는 증가
        lengthGroups[length] = (lengthGroups[length] || 0) + 1;
    }
    
    // 4. 가장 큰 그룹의 크기를 찾기
    let maxGroupSize = 0;
    for (let count of Object.values(lengthGroups)) {
        maxGroupSize = Math.max(maxGroupSize, count);
    }
    
    return maxGroupSize;
}
