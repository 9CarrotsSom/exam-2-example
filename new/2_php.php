$studentscore = [
    [
        "studentName" => "SomSak Thianitidatdanon",
        "score" => [7, 8, 1, 7, 0, 4, 20, 25]
    ],
    [
        "studentName" => "Saiyan Kittitthanapakorn",
        "score" => [9, 1, 5, 8, 7, 1, 2, 2]
    ],
    [
        "studentName" => "Somchai Patanapiyadanon",
        "score" => [9, 6, 4, 1, 2, 3, 25, 12]
    ],
    [
        "studentName" => "Sittichai Puyyophawattana",
        "score" => [8, 7, 8, 0, 1, 5, 15, 12]
    ],
    [
        "studentName" => "Ekachai Eakthanonarakul",
        "score" => [9, 8, 7, 1, 3, 6, 27, 27]
    ],
    [
        "studentName" => "Somsri Premptharatchoti",
        "score" => [10, 10, 10, 10, 6, 9, 24, 25]
    ],
    [
        "studentName" => "Nakrob Pakdeesirinrakul",
        "score" => [7, 8, 9, 6, 10, 5, 25, 30]
    ],
];

$finalScore = [];
foreach ($studentscore as $student) {
    $sum = array_reduce($student["score"], function($a, $b) {
        return $a + $b;
    });
    array_push($finalScore, $sum);
}

for ($i = 0; $i < count($finalScore); $i++) {
    $score = $finalScore[$i];

    if ($score >= 80) {
        echo 'Student ' . ($i + 1) . ' will get Grade A';
    } elseif ($score >= 75) {
        echo 'Student ' . ($i + 1) . ' will get Grade B+';
    } elseif ($score >= 70) {
        echo 'Student ' . ($i + 1) . ' will get Grade B';
    } elseif ($score >= 65) {
        echo 'Student ' . ($i + 1) . ' will get Grade C+';
    } elseif ($score >= 60) {
        echo 'Student ' . ($i + 1) . ' will get Grade C';
    } elseif ($score >= 55) {
        echo 'Student ' . ($i + 1) . ' will get Grade D+';
    } elseif ($score >= 50) {
        echo 'Student ' . ($i + 1) . ' will get Grade D';
    } elseif ($score <= 49) {
        echo 'Student ' . ($i + 1) . ' will get Grade F';
    }
}
