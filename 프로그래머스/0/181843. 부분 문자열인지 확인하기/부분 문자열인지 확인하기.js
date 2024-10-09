function solution(my_string, target) {
    // target 포함시 1, 없으면 0 반환
    return my_string.includes(target) ? 1 : 0;
}