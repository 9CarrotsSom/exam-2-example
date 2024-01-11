void main() {
  List<Map<String, dynamic>> studentScores = [
    {
      "studentName": "SomSak Thianitidatdon",
      "score": [7, 8, 1, 7, 0, 4, 20, 25]
    },
    {
      "studentName": "Saiyan Kittitthanpakorn",
      "score": [9, 1, 5, 8, 7, 1, 2, 2]
    },
    {
      "studentName": "Somchai Patanapiyathatdon",
      "score": [9, 6, 4, 1, 2, 3, 25, 12]
    },
    {
      "studentName": "Sitthichai Puyopowithanat",
      "score": [8, 7, 8, 0, 1, 5, 15, 12]
    },
    {
      "studentName": "Ekachai Eaktanonrakul",
      "score": [9, 8, 7, 1, 3, 6, 27, 27]
    },
    {
      "studentName": "Somsri Premtharachoti",
      "score": [10, 10, 10, 10, 6, 9, 24, 25]
    },
    {
      "studentName": "Nakrob Pakdeesirinrakul",
      "score": [7, 8, 9, 6, 10, 5, 25, 30]
    }
  ];

  List<int> finalScore = [];
  for (int i = 0; i < studentScores.length; i++) {
    int sum =
        studentScores[i]["score"].fold<int>(0, (dynamic a, dynamic b) => a + b);
    finalScore.add(sum);
  }

  for (int i = 0; i < finalScore.length; i++) {
    int score = finalScore[i];

    if (score >= 80) {
      print('Student ${i + 1} will get grade A');
    } else if (score >= 75) {
      print('Student ${i + 1} will get grade B+');
    } else if (score >= 70) {
      print('Student ${i + 1} will get grade B');
    } else if (score >= 65) {
      print('Student ${i + 1} will get grade C+');
    } else if (score >= 60) {
      print('Student ${i + 1} will get grade C');
    } else if (score >= 55) {
      print('Student ${i + 1} will get grade D+');
    } else if (score >= 50) {
      print('Student ${i + 1} will get grade D');
    } else if (score <= 49) {
      print('Student ${i + 1} will get grade F');
    }
  }
}
