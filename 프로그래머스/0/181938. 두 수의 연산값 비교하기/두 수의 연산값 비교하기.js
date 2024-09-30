function solution(a, b) {

    const connect = parseInt(String(a) + String(b));
    const multi = 2 * a * b;
    
    return connect >= multi ? connect : multi;
}