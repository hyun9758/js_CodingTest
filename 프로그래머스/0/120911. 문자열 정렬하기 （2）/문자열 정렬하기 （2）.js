function solution(my_string) {
    const sortedString = my_string.toLowerCase().split('').sort().join('');
    
    // 소문자로 변환 후 => toLowerCase
    // 문자열을 문자 하나하나로 나눠 배열 변환 => split('')
    // 배열을 알파벳 순서대로 정렬 => sort()
    // 정렬된 배열을 다시 문자열로 결합 => join('')
    return sortedString;
}