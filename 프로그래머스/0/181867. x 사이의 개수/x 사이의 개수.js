function solution(myString) {
    let splitStrings = myString.split("x");
    let lengths = splitStrings.map(str => str.length);
    return lengths;
}