function solution(my_string) {
    let suffixes = [];
    
    // 모든 접미사 생성
    // 인덱스 i부터 끝까지의 부분 문자열을 반환
    for (let i = 0; i < my_string.length; i++) {
        suffixes.push(my_string.substring(i));
    }
    
    // 접미사들을 사전순으로 정렬
    suffixes.sort();
    
    return suffixes;
}