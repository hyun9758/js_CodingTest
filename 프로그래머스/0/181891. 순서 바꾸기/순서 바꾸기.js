function solution(num_list, n) {
    const afterN = num_list.slice(n);
    const uptoN = num_list.slice(0,n);
    return afterN.concat(uptoN);
}

// concat 메서드: 두 배열을 합친다