function solution(my_string, is_prefix) {
    var answer = 0;
    
    const prefixLength = is_prefix.length;
    
    for (let i = 0; i < is_prefix.length; i++) {
        if (i >= my_string.length || my_string[i] !== is_prefix[i] ) {
            return 0;
        }
    }
    return 1;
}

// function solution(my_string, is_prefix) {
//     // my_string의 접두사를 is_prefix의 길이만큼 잘라서 비교
//     if (my_string.startsWith(is_prefix)) {
//         return 1;  // 접두사가 맞으면 1
//     } else {
//         return 0;  // 접두사가 아니면 0
//     }
// }
// startsWith 메소드: 주어진 문자열이 특정 문자열로 시작하는지 확인
