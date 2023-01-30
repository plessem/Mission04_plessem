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
        $("#totalGrade").text("Total grade: " + totalGradeNum + " % A"); //printing out the numerical grade and the assigned letter grade
    }
    else if (totalGradeNum >= 90) {
        $("#totalGrade").text("Total grade: " + totalGradeNum + "% A-");
    }
    else if (totalGradeNum >= 87) {
        $("#totalGrade").text("Total grade: " + totalGradeNum + "% B+");
    }
    else if (totalGradeNum >= 84) {
        $("#totalGrade").text("Total grade: " + totalGradeNum + "% B");
    }
    else if (totalGradeNum >= 80) {
        $("#totalGrade").text("Total grade: " + totalGradeNum + "% B-");
    }
    else if (totalGradeNum >= 77) {
        $("#totalGrade").text("Total grade: " + totalGradeNum + "% C+");
    }
    else if (totalGradeNum >= 74) {
        $("#totalGrade").text("Total grade: " + totalGradeNum + "% C");
    }
    else if (totalGradeNum >= 70) {
        $("#totalGrade").text("Total grade: " + totalGradeNum + "% C-");
    }
    else if (totalGradeNum >= 67) {
        $("#totalGrade").text("Total grade: " + totalGradeNum + "% D+");
    }
    else if (totalGradeNum >= 64) {
        $("#totalGrade").text("Total grade: " + totalGradeNum + "% D");
    }
    else if (totalGradeNum >= 60) {
        $("#totalGrade").text("Total grade: " + totalGradeNum + "% D-");
    }
    else {
        $("#totalGrade").text("Total grade: " + totalGradeNum + "% E");
    }
})