// 최대공약수를 구하는 함수

function gcd(a,b) {
    while (b!== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// 최소공배수를 구하는 함수

function lcm(a,b) {
    return (a*b) / gcd(a,b);
}

function solution(n) {
    // 6과 n의 최소공배수를 구한 후 피자 판 수 계산
    const slicesNeeded = lcm(6,n);
    
    // 최소 피자 판 수
    return slicesNeeded / 6;
    
}

// 최소 공배수 (LCM) = 두 수의 곱을 두 수의 최대공약수(GCD)로 나눈 값