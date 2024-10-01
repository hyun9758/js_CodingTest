function solution(num_list) {
    // 오름차순으로 정렬, 숫자로 정렬하기 위해서 비교 함수 사용
    num_list.sort((a,b) => a - b);
    // 앞의 5개 제외하고 반환
    return num_list.slice(5);
}