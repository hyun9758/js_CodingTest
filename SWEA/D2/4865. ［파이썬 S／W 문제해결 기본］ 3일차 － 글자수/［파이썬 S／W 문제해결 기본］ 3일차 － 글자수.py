T = int(input())
for tc in range(1, T+1):
    str1 = input()
    str2 = input()
    max_result = 0

    for i in str1:
        result = 0
        for j in str2:
            if i == j:
                result += 1

        if max_result < result:
            max_result = result
    print(f"#{tc} {max_result}")