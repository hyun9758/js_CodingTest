function solution(str_list, ex) {
    // ex를 포함하지 않는 문자열들만 모아 이어붙이기
    return str_list.filter(str => !str.includes(ex)).join('');
}