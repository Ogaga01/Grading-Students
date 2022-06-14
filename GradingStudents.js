function gradingStudents(grades) {
    // Write your code here
    let newGrades = []
    for (let i = 0; i<grades.length; i++){
        if (grades[i] < 38) {
            newGrades.push(grades[i]);
        }else if (((Math.ceil(grades[i]/5)* 5) - grades[i]) < 3) {
            newGrades.push(Math.ceil(grades[i]/5)*5)
        }else if (((Math.ceil(grades[i]/5)*5) - grades[i]) >= 3) {
            newGrades.push(grades[i])
        }
    }return newGrades;

}

export default gradingStudents