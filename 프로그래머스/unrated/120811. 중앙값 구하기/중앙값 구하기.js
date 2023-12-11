function solution(array) {
    // sort -> array.length % 2 -> array[i]
    const sortedArray = array.sort((a,b) => a-b);
    let number = parseInt(sortedArray.length / 2);
    return sortedArray[number];
}