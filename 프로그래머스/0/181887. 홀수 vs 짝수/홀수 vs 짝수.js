function solution(num_list) {
    let odd = 0;
    let even = 0;
    
    for (let i=0; i < num_list.length; i++) {
        if ((i+1) % 2 === 1) {
            odd += num_list[i];
        } else {
            even += num_list[i];
        }
    }
    return even < odd ? odd : even;
}