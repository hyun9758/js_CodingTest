function solution(num_list) {
    let oddStr = '';
    let evenStr = '';
    
    for (let num of num_list) {
        if (num % 2 === 0) {
            evenStr += num;
        } else {
            oddStr += num;
        }
    }
    
    // 홀수와 짝수를 각각 숫자로 변환해서 더하기
    return Number(oddStr) + Number(evenStr);
}