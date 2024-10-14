function solution(arr, intervals) {
    const [a1, b1] = intervals[0]; // 첫 번째 구간
    const [a2, b2] = intervals[1]; // 두 번째
    
    // 배열 추출
    // slice는 마지막 인덱스를 제외하기 때문에 +1
    const part1 = arr.slice(a1, b1 + 1);
    const part2 = arr.slice(a2, b2 + 1);
    
    return part1.concat(part2);
}