function solution(emergency) {
    // 내림차순 정렬
    let sorted = emergency.slice().sort((a, b) => b - a);
    // 정렬된 배열을 바탕으로 진료 순서 만들기
    return emergency.map(value => sorted.indexOf(value) + 1)
}