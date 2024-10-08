function solution(box, n) {
    const width = box[0]; // 가로
    const height = box[1]; // 세로
    const depth = box[2]; // 높이
    
    const count = Math.floor(width/n) * Math.floor(height/n) * Math.floor(depth/n);
    
    return count;
}