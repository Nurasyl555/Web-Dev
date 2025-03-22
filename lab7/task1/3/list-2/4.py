def sum13(nums):
    total = 0
    skip = False  # Флаг, который помогает пропускать числа после 13

    for num in nums:
        if num == 13:
            skip = True  # Включаем флаг, чтобы пропустить следующее число
            continue
        if skip:  
            skip = False  # Пропускаем текущее число и сбрасываем флаг
            continue
        total += num

    return total
