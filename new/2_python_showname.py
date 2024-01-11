studentscore = [
    {
        "studentName": "Somchit Thianitidatlon", 
        "score": [7, 8, 1, 7, 0, 4, 20, 25]
    },
    {
        "studentName": "Saiyan Kittitnpong", 
        "score": [9, 1, 5, 8, 7, 1, 2, 2]
    },
    {
        "studentName": "Somchai Patanapiyadol", 
        "score": [9, 6, 4, 1, 2, 3, 25, 12]
    },
    {
        "studentName": "Sittichai Pungopviwat", 
        "score": [8, 7, 8, 0, 1, 5, 15, 12]
    },
    {
        "studentName": "Ekachai Eaktanarakul", 
        "score": [9, 8, 7, 1, 3, 6, 27, 27]
    },
    {
        "studentName": "Somsri Premtharatchoti", 
        "score": [10, 10, 10, 10, 6, 9, 24, 25]
    },
    {
        "studentName": "Nakrob Pakdeesinrakul", 
        "score": [7, 8, 9, 6, 10, 5, 25, 30]
    },
]

final_score = []
for student in studentscore:
    score_sum = sum(student["score"])
    final_score.append({"studentName": student["studentName"], "score": score_sum})

for i, student in enumerate(final_score):
    score = student["score"]
    name = student["studentName"]

    if score >= 80:
        print('Student ' + str(i + 1) + " " + name + 'will get grade A')
    elif score >= 75:
        print('Student ' + str(i + 1) + " " + name + 'will get grade B+')
    elif score >= 70:
        print('Student ' + str(i + 1) + " " + name + 'will get grade B')
    elif score >= 65:
        print('Student ' + str(i + 1) + " " + name + 'will get grade C+')
    elif score >= 60:
        print('Student ' + str(i + 1) + " " + name + 'will get grade C')
    elif score >= 55:
        print('Student ' + str(i + 1) + " " + name + 'will get grade D+')
    elif score >= 50:
        print('Student ' + str(i + 1) + " " + name + 'will get grade D')
    else:
        print('Student ' + str(i + 1) + " " + name + 'will get grade F')
