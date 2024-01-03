var studentscore = [
    {
        studentName: "สมศักดิ์ เธียรนิติฐาดล",
        score: [7, 8, 1, 7, 0, 4, 20, 25]
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
] 


// [ สมศักดิ์เธียรนิติฐาดล ] [ 7,8,1,7,0,4,20,25];
//                     [ สายยันกิตติธนปกรณ ] [ 9,1,5,8,7,1,2,2];
//                     [ สมชายพัฒนภิญญาดล ] [ 9,6,4,1,2,3,25,12];
//                     [ สิทธิชัยปุญญออภิวัฒนา ] [ 8,7,8,0,1,5,15,12];
//                     [ เอกชัยเอกธนนรากุล ] [ 9,8,7,1,3,6,27,27];
//                     [ สมศรีเปรมธาราโชติ ] [ 10,10,10,10,6,9,24,25];
//                     [ นักรบภักดีศิรินรกุล ] [ 7,8,9,6,10,5,25,30];
//                   คะแนนแต่ละใบงาน     1 2 3 4 5  6 กลาง ปลาย

// var studentscore = [ 72,35,62,56,88,104,100 ];

let finalScore = [];
studentscore.forEach((student) => finalScore.push(student.score.reduce((a, b) => a + b)));


                //    B  F  C  D+ A  A   A

for (var i = 0; i < finalScore.length; i++){
    var score = finalScore[i];

    if (score >= 80 ){
        console.log('นักเรียนคนที่ '+ (i+1) +  ' จะได้เกรด A');
    }
    else if (score >= 75 ){
        console.log('นักเรียนคนที่ '+ (i+1) + ' จะได้เกรด B+');
    }
    else if (score >= 70 ){
        console.log('นักเรียนคนที่ '+ (i+1) + ' จะได้เกรด B');
    }
    else if (score >= 65 ){
        console.log('นักเรียนคนที่ '+ (i+1) + ' จะได้เกรด C+');
    }
    else if (score >= 60 ){
        console.log('นักเรียนคนที่ '+ (i+1) + ' จะได้เกรด C');
    }
    else if (score >= 55 ){
        console.log('นักเรียนคนที่ '+ (i+1) + ' จะได้เกรด D+');
    }
    else if (score >= 50 ){
        console.log('นักเรียนคนที่ '+ (i+1) + ' จะได้เกรด D');
    }
    else if (score <= 49 ){
        console.log( 'นักเรียนคนที่ ' + (i+1) + ' จะได้เกรด F');       
    }
}
