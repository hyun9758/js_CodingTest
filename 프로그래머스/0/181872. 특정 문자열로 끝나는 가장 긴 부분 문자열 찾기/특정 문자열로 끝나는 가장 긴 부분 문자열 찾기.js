function solution(myString, pat) {
    // pat로 끝나는 가장 긴 부분 문자열
    const lastIndex = myString.lastIndexOf(pat);
    
    // 없으면 빈 문자열
    if (lastIndex == -1) {
        return '';
    }
    
    //pat의 시작 위치부터 해당 부분 문자열 반환
    return myString.slice(0, lastIndex + pat.length)
}