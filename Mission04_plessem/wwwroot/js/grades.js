//function to calculate grade in numerical form and letter form
$("#buttonSend").click(function () {
    //calculating total grade in number form
    var totalGradeNum = (((($("#assign").val() * 50)
        + ($("#grouppro").val() * 10)
        + ($("#quiz").val() * 10)
        + ($("#midterm").val() * 10)
        + ($("#final").val() * 10)
        + ($("#intex").val()) * 10)) / 100);

    //assigning a letter grade based on the number grade
    if (totalGradeNum >= 94) {
        alert("Your grade is: " + totalGradeNum + "% A"); //giving result in alert for mission05 assignment
        //$("#totalGrade").text("Total grade: " + totalGradeNum + " % A"); //printing out the numerical grade and the assigned letter grade
    }
    else if (totalGradeNum >= 90) {
        alert("Your grade is: " + totalGradeNum + "% A-");
        //$("#totalGrade").text("Total grade: " + totalGradeNum + "% A-");
    }
    else if (totalGradeNum >= 87) {
        alert("Your grade is: " + totalGradeNum + "% B+");
        //$("#totalGrade").text("Total grade: " + totalGradeNum + "% B+");
    }
    else if (totalGradeNum >= 84) {
        alert("Your grade is: " + totalGradeNum + "% B");
        //$("#totalGrade").text("Total grade: " + totalGradeNum + "% B");
    }
    else if (totalGradeNum >= 80) {
        alert("Your grade is: " + totalGradeNum + "% B-");
        //$("#totalGrade").text("Total grade: " + totalGradeNum + "% B-");
    }
    else if (totalGradeNum >= 77) {
        alert("Your grade is: " + totalGradeNum + "% C+");
        //$("#totalGrade").text("Total grade: " + totalGradeNum + "% C+");
    }
    else if (totalGradeNum >= 74) {
        alert("Your grade is: " + totalGradeNum + "% C");
        //$("#totalGrade").text("Total grade: " + totalGradeNum + "% C");
    }
    else if (totalGradeNum >= 70) {
        alert("Your grade is: " + totalGradeNum + "% C-");
        //$("#totalGrade").text("Total grade: " + totalGradeNum + "% C-");
    }
    else if (totalGradeNum >= 67) {
        alert("Your grade is: " + totalGradeNum + "% D+");
        //$("#totalGrade").text("Total grade: " + totalGradeNum + "% D+");
    }
    else if (totalGradeNum >= 64) {
        alert("Your grade is: " + totalGradeNum + "% D");
        //$("#totalGrade").text("Total grade: " + totalGradeNum + "% D");
    }
    else if (totalGradeNum >= 60) {
        alert("Your grade is: " + totalGradeNum + "% D-");
        //$("#totalGrade").text("Total grade: " + totalGradeNum + "% D-");
    }
    else {
        alert("Your grade is: " + totalGradeNum + "% E");
        //$("#totalGrade").text("Total grade: " + totalGradeNum + "% E");
    }
})