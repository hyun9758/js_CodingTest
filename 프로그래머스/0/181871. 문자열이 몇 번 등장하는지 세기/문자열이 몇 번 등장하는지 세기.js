function solution(myString, pat) {
    let count = 0;
    let pos = 0;
    
    while ((pos = myString.indexOf(pat, pos)) !== -1 ) {
        count++;
        pos += 1;
    }
    return count;
}

// indexOf => myStirng에서 pat의 위치 확인
// 검색한 위치에서 겹치는 부분을 처리하기 위해 한 글자씩 이동
// indexOf가 -1 반환할 때까지 계산 
