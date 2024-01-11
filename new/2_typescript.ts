interface studentInfo {
    studentName: String,
    score: Array<Number>
}

const studentData: studentInfo[] = [
    {
        studentName: "สมศักดิ์ เธียรนิติฐาดล",
        score: [7, 8, 1, 7, 0, 4, 20, 25],
    },
    {
        studentName: "สายยัน กิตติธนปกรณ",
        score: [9, 1, 5, 8, 7, 1, 2, 2]
    },
    {
        studentName: "สมชาย พัฒนภิญญาดล",
        score: [9, 6, 4, 1, 2, 3, 25, 12]
    },
    {
        studentName: "สิทธิชัย ปุญญออภิวัฒนา",
        score: [8, 7, 8, 0, 1, 5, 15, 12]
    },
    {
        studentName: "เอกชัย เอกธนนรากุล",
        score: [9, 8, 7, 1, 3, 6, 27, 27]
    },
    {
        studentName: "สมศรี เปรมธาราโชติ",
        score: [10, 10, 10, 10, 6, 9, 24, 25]
    },
    {
        studentName: "นักรบภักดี ศิรินรกุล",
        score: [7, 8, 9, 6, 10, 5, 25, 30]
    },
];


let sumFinalScoreEachStudent: number[] = [];
studentData.forEach((student: studentInfo): void => {
    const sum: Number = student.score.reduce((a: any, b: any): number => {
        return a + b;
    });
    sumFinalScoreEachStudent.push(sum.valueOf());
});

for(let i: number = 0; i < sumFinalScoreEachStudent.length; i++){
    const getGrade: string = compareGrade(sumFinalScoreEachStudent[i]);
    console.log(`Student ${String(i + 1)} got : ${getGrade}`);
}


function compareGrade(score: number): string{
    if(score >= 80){
        return "A";
    } 
    if(score >= 75){
        return "B+";
    } 
    if(score >= 70){
        return "B";
    } 
    if(score >= 65){
        return "C+";
    } 
    if(score >= 60){
        return "C";
    } 
    if(score >= 55){
        return "D+";
    } 
    if(score >= 50){
        return "D";
    } 
    if(score <= 49){
        return "F";
    } 
    
    return "Invalid score";
}