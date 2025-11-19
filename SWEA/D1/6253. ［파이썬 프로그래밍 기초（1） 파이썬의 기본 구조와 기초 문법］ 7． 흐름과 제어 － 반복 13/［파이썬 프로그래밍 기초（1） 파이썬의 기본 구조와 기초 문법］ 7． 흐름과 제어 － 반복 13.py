T = int(input())
a = ""
while T > 0:
    a = str(T % 2) + a
    T //= 2
print(a)