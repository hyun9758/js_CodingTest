function solution(num_list, n) {
    var answer = [];
    for (let i =0; i < num_list.length; i += n ) {
        answer.push(num_list[i])
    }
    return answer;
    
    // i를 0부터 시작하여 n만큼씩 증가시키며 반복
}