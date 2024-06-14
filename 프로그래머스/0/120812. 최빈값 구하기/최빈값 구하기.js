function solution(array) {
    let count = {};
    
    // 배열을 순회, 숫자의 등장 횟수를 count 객체에 기록 
    for (let num of array) {
        if (count[num]) {
            count[num]++;
        } else {
            count[num] = 1;
        }
    }
    
    // 최빈값, 횟수를 저장한 변수
    let mode = -1; // 최빈값 초기화
    let maxCount = 0; // 최대 등장 횟수 초기화
    let isUnique = true; // 최빈값이 유일한지 여부 초기화
    
    for (let num in count) {
        if (count[num] > maxCount) {
            mode = parseInt(num);
            maxCount = count[num];
            isUnique = true; // 새로운 최빈값 발견
        } else if (count[num] === maxCount) {
            isUnique = false; // 최빈값이 중복 
        }
    }
    // 최빈값이 한 개 이상인지 확인 
    return isUnique ? mode: -1;
}