function solution(my_string) {
    let answer = '';
    const vowel = ['a', 'e', 'i', 'o', 'u'];
    
    for (let i=0; i< my_string.length; i++) {
        let char = my_string[i];
        if (!vowel.includes(char)) {
         answer += char;   
        }
    }
    
    return answer;
}