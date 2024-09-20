function solution(my_string, num1, num2) {
    var answer = '';
    
    // 문자열을 배열로 바꾸기
    let arr = my_string.split('');
    
    // num1과 num2 인덱스의 문자를 교환하기
    let temp = arr[num1]
    arr[num1] = arr[num2];
    arr[num2] = temp;
    
    answer = arr.join('');
    return answer;
}