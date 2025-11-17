number_str = input()
digit_list = [int(digit) for digit in number_str]
answer = 0

for i in digit_list:
    answer += i

print(answer)