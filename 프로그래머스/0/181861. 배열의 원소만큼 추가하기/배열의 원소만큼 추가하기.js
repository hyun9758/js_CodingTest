function solution(arr) {
    var answer = [];
    
    for (let i=0; i < arr.length; i++) {
        let a = arr[i];
        // answer에 a를 a번 추가
        for (let j=0; j < a; j++) {
            answer.push(a);
        }
    }
    return answer;
}