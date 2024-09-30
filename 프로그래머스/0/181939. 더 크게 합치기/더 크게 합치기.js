function solution(a, b) {
    // 문자열로 이어붙이기
    const ab = String(a) + String(b);
    const ba = String(b) + String(a);
    
    return ab >= ba ? parseInt(ab) : parseInt(ba);
}