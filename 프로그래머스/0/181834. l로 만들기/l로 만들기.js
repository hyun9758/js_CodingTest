function solution(myString) {
    let result = '';
    
    for (let i = 0; i < myString.length; i++) {
        let char = myString[i];
        
        if (char < 'l') {
            result += 'l'
        } else {
            result += char;
        }
    }
    
    return result;
}