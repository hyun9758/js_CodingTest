function solution(array, n) {
    let closest = array[0]; // 배열 첫 번째 원소를 가장 가까운 수로 초기화

    for (let i = 1; i < array.length; i++) {
        // 현재 가장 가까운 수와 array[i]의 차이를 비교
        if (Math.abs(array[i] - n) < Math.abs(closest - n)) {
            closest = array[i];  // 더 가까운 수로 업데이트
        } 
        // 차이가 같을 때는 더 작은 수를 우선
        else if (Math.abs(array[i] - n) === Math.abs(closest - n)) {
            if (array[i] < closest) {
                closest = array[i];
            }
        }
    }

    return closest; // 가장 가까운 수 반환
}
