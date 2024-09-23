function solution(my_string, is_suffix) {
     if (my_string.slice(-is_suffix.length) === is_suffix) {
         return 1;
     } else {
         return 0;
     }
}

// slice 메소드를 사용하여 my_string의 끝부분에서 is_suffix의 길이만큼 잘라내기 