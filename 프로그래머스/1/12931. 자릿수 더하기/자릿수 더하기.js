function solution(n)
{
    return String(n).split('').reduce((sum, digit) => sum + Number(digit), 0);
    
    // sum이라는 누적값에 각 자릿수를 더함
}