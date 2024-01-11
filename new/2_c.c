#include <stdio.h>

struct Student {
    char studentName[100];
    int score[8];
};

int main() {
    struct Student studentscore[] = {
        {"Somchai Thianitithadon", {7, 8, 1, 7, 0, 4, 20, 25}},
        {"Saiyan Kittititnprakorn", {9, 1, 5, 8, 7, 1, 2, 2}},
        {"Somchai Patanapiyathadon", {9, 6, 4, 1, 2, 3, 25, 12}},
        {"Sittichai Puyopirawat", {8, 7, 8, 0, 1, 5, 15, 12}},
        {"Ekachai Ekathananarakul", {9, 8, 7, 1, 3, 6, 27, 27}},
        {"Somsri Premtharachot", {10, 10, 10, 10, 6, 9, 24, 25}},
        {"Nakrob Pakdeesirinrakul", {7, 8, 9, 6, 10, 5, 25, 30}}
    };

    int finalScore[7];

    for (int i = 0; i < 7; i++) {
        int sum = 0;
        for (int j = 0; j < 8; j++) {
            sum += studentscore[i].score[j];
        }
        finalScore[i] = sum;
    }

    for (int i = 0; i < 7; i++) {
        int score = finalScore[i];

        if (score >= 80) {
            printf("Student %d will get grade A\n", (i + 1));
        } else if (score >= 75) {
            printf("Student %d will get grade B+\n", (i + 1));
        } else if (score >= 70) {
            printf("Student %d will get grade B\n", (i + 1));
        } else if (score >= 65) {
            printf("Student %d will get grade C+\n", (i + 1));
        } else if (score >= 60) {
            printf("Student %d will get grade C\n", (i + 1));
        } else if (score >= 55) {
            printf("Student %d will get grade D+\n", (i + 1));
        } else if (score >= 50) {
            printf("Student %d will get grade D\n", (i + 1));
        } else if (score <= 49) {
            printf("Student %d will get grade F\n", (i + 1));
        }
    }

    return 0;
}
