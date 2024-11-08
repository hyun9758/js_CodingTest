function solution(phone_number) {
    const length = phone_number.length;
    const starred = '*'.repeat(length - 4);
    const lastFour = phone_number.slice(-4);
    return starred + lastFour; 
}