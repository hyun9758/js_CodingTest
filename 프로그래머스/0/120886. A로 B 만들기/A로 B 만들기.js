function solution(before, after) {
    // 두 문자열을 각각 정렬
    
     const sortedBefore = before.split('').sort().join('');
    const sortedAfter = after.split('').sort().join('');
    
    return sortedBefore === sortedAfter ? 1 : 0;
}