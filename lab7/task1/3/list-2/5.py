def sum67(nums):
    total = 0
    ignore = False  # Флаг, который помогает пропускать числа между 6 и 7

    for num in nums:
        if num == 6:
            ignore = True  # Включаем игнорирование
        elif ignore and num == 7:
            ignore = False  # Отключаем игнорирование после 7
        elif not ignore:
            total += num  # Если не в зоне игнорирования, добавляем в сумму

    return total
