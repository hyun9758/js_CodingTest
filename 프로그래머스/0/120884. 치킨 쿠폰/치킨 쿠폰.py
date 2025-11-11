def solution(chicken):
    coupon = chicken
    service = 0
    
    while coupon >= 10:
        new_chicken = coupon // 10
        service += new_chicken
        coupon = (coupon % 10) + new_chicken
        
    return service 
    