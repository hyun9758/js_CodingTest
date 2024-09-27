function solution(num_list) {
    let multi = 1;
    let sum = 0;
    
    for (let i=0; i < num_list.length; i++) {
        multi *= num_list[i];
        sum += num_list[i];
    }
    return multi < sum * sum ? 1: 0;
    
    // 곱이 합의 제곱보다 작으면 1, 그렇지 않으면 0
}