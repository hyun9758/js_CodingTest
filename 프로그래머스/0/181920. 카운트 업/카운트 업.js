function solution(start_num, end_num) {
    var answer = [];
    for (let i = start_num; i <= end_num; i++) {
        answer.push(i);
        // 현재 숫자 i를 리스트에 추가한다
    }
    return answer;
}