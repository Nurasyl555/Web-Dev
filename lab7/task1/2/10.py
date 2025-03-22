if __name__ == '__main__':
    class_d = []
    
    
    for _ in range(int(input())):
        name = input()
        score = float(input())
        class_d.append([name, score])

   
    scores = sorted(set([score for name, score in class_d]))
    

    second_lowest = scores[1]


    names = sorted([name for name, score in class_d if score == second_lowest])

  
    for name in names:
        print(name)
