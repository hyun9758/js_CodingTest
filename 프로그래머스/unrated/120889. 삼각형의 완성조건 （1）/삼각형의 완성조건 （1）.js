function solution(sides) {
    sides.sort((a,b) => a-b);
    const longestSide = sides[2];
    const sum = sides[0] + sides[1];
    if (longestSide < sum) {
        return 1;
    } else {
        return 2;
    }
}