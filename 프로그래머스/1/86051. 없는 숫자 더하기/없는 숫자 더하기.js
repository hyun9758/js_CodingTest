function solution(numbers) {
    const totalSum = 45;              
    const numbersSum = numbers.reduce((acc, num) => acc + num, 0);
    return totalSum - numbersSum;           
}
