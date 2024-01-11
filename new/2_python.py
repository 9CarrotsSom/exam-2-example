
student_scores = [
    {
        'studentName': 'SomSak Thienarintadon',
        'score': [7, 8, 1, 7, 0, 4, 20, 25]
    },
    {
        'studentName': 'Saiyan Kittitthanapakorn',
        'score': [9, 1, 5, 8, 7, 1, 2, 2]
    },
    {
        'studentName': 'Somchai Patanapinyadon',
        'score': [9, 6, 4, 1, 2, 3, 25, 12]
    },
    {
        'studentName': 'Sitthichai Puyoppariwat',
        'score': [8, 7, 8, 0, 1, 5, 15, 12]
    },
    {
        'studentName': 'Ekachai Ekathanarakul',
        'score': [9, 8, 7, 1, 3, 6, 27, 27]
    },
    {
        'studentName': 'Somsri Premtharachot',
        'score': [10, 10, 10, 10, 6, 9, 24, 25]
    },
    {
        'studentName': 'Nakrob Pakdeesirinroong',
        'score': [7, 8, 9, 6, 10, 5, 25, 30]
    },
]


final_scores = [sum(student['score']) for student in student_scores]


for i in range(len(final_scores)):
    score = final_scores[i]

    if score >= 80:
        print('Student ' + str(i + 1) + ' will get grade A')
    elif score >= 75:
        print('Student ' + str(i + 1) + ' will get grade B+')
    elif score >= 70:
        print('Student ' + str(i + 1) + ' will get grade B')
    elif score >= 65:
        print('Student ' + str(i + 1) + ' will get grade C+')
    elif score >= 60:
        print('Student ' + str(i + 1) + ' will get grade C')
    elif score >= 55:
        print('Student ' + str(i + 1) + ' will get grade D+')
    elif score >= 50:
        print('Student ' + str(i + 1) + ' will get grade D')
    else:
        print('Student ' + str(i + 1) + ' will get grade F')
