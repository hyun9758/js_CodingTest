function solution(hp) {
    const general = Math.floor(hp/5);
    hp %= 5;
    
    const soldier = Math.floor(hp/3);
    hp %= 3
    
    const worker = hp 
    
    const answer = general + soldier + worker;
    return answer;
}