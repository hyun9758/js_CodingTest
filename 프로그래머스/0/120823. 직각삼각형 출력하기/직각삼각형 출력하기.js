const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

// 입력을 받는 부분
rl.on('line', function (line) {
    input = line.split(' '); // 입력값을 공백으로 나누기
}).on('close', function () {
    const n = Number(input[0]); // 첫 번째 값을 n으로 변환

    // n의 값만큼 직각 이등변 삼각형을 출력
    for (let i = 1; i <= n; i++) {
        console.log('*'.repeat(i)); // i만큼의 '*' 출력
    }
});