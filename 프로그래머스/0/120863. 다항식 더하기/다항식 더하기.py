def solution(polynomial):
    terms = polynomial.split(" + ")  # 항 분리
    x_sum = 0
    c_sum = 0

    for t in terms:
        if 'x' in t:                 # x항
            coeff = t.replace('x', '')
            x_sum += 1 if coeff == '' else int(coeff)
        else:                        # 상수항
            c_sum += int(t)

    parts = []
    if x_sum:
        parts.append('x' if x_sum == 1 else f'{x_sum}x')
    if c_sum:
        parts.append(str(c_sum))

    return ' + '.join(parts) if parts else '0'
