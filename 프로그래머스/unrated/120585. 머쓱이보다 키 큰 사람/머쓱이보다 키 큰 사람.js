function solution(array, height) {
    let tallerCount = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > height) {
         tallerCount++;
        }
    }
    return tallerCount;
}