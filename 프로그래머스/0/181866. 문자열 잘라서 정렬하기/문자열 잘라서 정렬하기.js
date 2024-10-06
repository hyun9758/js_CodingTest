function solution(myString) {
    let answer = myString.split('x');
    
    answer = answer.filter(str => str !== '').sort();
    
    //  빈 문자열 제거
    // sort() : 남은 문자열을 사전순으로 정렬
    
    return answer;
}