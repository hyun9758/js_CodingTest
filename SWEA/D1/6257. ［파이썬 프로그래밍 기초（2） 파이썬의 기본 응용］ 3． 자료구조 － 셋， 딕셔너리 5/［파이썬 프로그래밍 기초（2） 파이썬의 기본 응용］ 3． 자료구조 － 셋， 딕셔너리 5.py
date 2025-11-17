fruit = ['   apple    ','banana','  melon']

result_dict = {x.strip(): len(x.strip()) for x in fruit}
print(result_dict)