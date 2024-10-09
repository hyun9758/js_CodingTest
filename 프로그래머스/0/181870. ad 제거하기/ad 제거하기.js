function solution(strArr) {
    // "ad"가 포함되지 않은 문자열만 필터링
    return strArr.filter(str => !str.includes("ad"))
}