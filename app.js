const students = [
    {
        name: 'Alia', 
        marks: 95
    },
    {
        name: 'Dalia',
        marks: 66
    },
    {
        name: 'Salia',
        marks: 80
    },
    {
        name: 'Malia', 
        marks: 59
    },
    {
        name: 'Lilia',
        marks: 47
    },
    {
        name: 'Jalaia',
        marks: 77
    }
];

for(let i = 0; i < students.length; i++){
    if(students[i].marks < 50){
        students[i].grade = 'F'
    }else if(students[i].marks < 60){
        students[i].grade = 'D'
    }else if(students[i].marks < 70){
        students[i].grade = 'C'
    }else if(students[i].marks < 80){
        students[i].grade = 'B'
    }else if(students[i].marks < 90){
        students[i].grade = 'A'
    }else if(students[i].marks <= 100){
        students[i].grade = 'A+'
    }else {
        students[i].grade = 'Invalid Marks'
    }
    console.log(students[i]);
}

// Output
// { name: 'Alex', marks: 95, grade: 'Golden A+' }
// { name: 'John', marks: 85, grade: 'A+' }
// { name: 'James', marks: 79, grade: 'A' }
// { name: 'Mary', marks: 65, grade: 'B' }
// { name: 'Robert', marks: 48, grade: 'F' }