/*
Author: Jessica Thompson
Date: 3/03/2019
Purpose: JavaScript to submit, validate and make my form interactive
*/


function init() {
    document.getElementById("submitAnswers").addEventListener("click", verifyForm);
    document.getElementById("resetBtn").addEventListener("click", reset);

    let q1Response = document.getElementById("question1");
    let q2Response = document.getElementById("question2");
    let q3Response = document.getElementById("question3");
    let q4Response = document.getElementById("question4");
    let q5Response = document.getElementsByName("question5");
    let q6Response = document.getElementsByName("question6");
    let q7Response = document.getElementsByName("question7");

    let q1Answer = "nassau";
    let q2Answer = "true";
    let q3Answer = "700";
    let q4Answer = "flamingo";
    let q5Answer = q5Response[0];
    let q6Answer = q6Response[2];
    let q7AnswerOne = q7Response[1];
    let q7AnswerTwo = q7Response[2];

    let questionsAnswered = [false, false, false, false, false, false, false];
    let formFilledCorrectly;


    //Ensure question 1 is answered, alerts if not
    q1Response.addEventListener("blur", verifyFilledQ1);

    function verifyFilledQ1() {
        if (q1Response.value.length === 0) {
            document.getElementById("incompleteQ1").style.display = "block";
            questionsAnswered[0] = false;
        } else {
            document.getElementById("incompleteQ1").style.display = "none";
            questionsAnswered[0] = true;
        }
    }

    //Ensure question 2 is answered, alerts if not
    q2Response.addEventListener("blur", verifyFilledQ2);

    function verifyFilledQ2() {
        if (q2Response.value.toLowerCase() === "true" || q2Response.value.toLowerCase() === "false") {
            document.getElementById("incompleteQ2").style.display = "none";
            questionsAnswered[1] = true;
        } else {
            document.getElementById("incompleteQ2").style.display = "block";
            questionsAnswered[1] = false;
        }
    }

    //Ensure question 3 is answered, alerts if not
    q3Response.addEventListener("change", verifyFilledQ3);

    function verifyFilledQ3() {
        if (q3Response.value === "defaultSelect") {
            document.getElementById("incompleteQ3").style.display = "block";
            questionsAnswered[2] = false;
        } else {
            document.getElementById("incompleteQ3").style.display = "none";
            questionsAnswered[2] = true;
        }
    }

    //Ensure question 4 is answered, alerts if not
    q4Response.addEventListener("change", verifyFilledQ4);

    function verifyFilledQ4() {
        if (q4Response.value === "defaultSelect") {
            document.getElementById("incompleteQ4").style.display = "block";
            questionsAnswered[3] = false;
        } else {
            document.getElementById("incompleteQ4").style.display = "none";
            questionsAnswered[3] = true;
        }
    }


    function verifyForm() {
        //Ensure question 5 is answered, alerts if not
        for (let i = 0; i < q5Response.length; i++) {
            if (!q5Response[i].checked) {
                document.getElementById("incompleteQ5").style.display = "block";
                questionsAnswered[4] = false;
            } else {
                document.getElementById("incompleteQ5").style.display = "none";
                questionsAnswered[4] = true;
                break;
            }
        }

        //Ensure question 6 is answered, alerts if not
        for (let i = 0; i < q6Response.length; i++) {
            if (!q6Response[i].checked) {
                document.getElementById("incompleteQ6").style.display = "block";
                questionsAnswered[5] = false;
            } else {
                document.getElementById("incompleteQ6").style.display = "none";
                questionsAnswered[5] = true;
                break;
            }
        }

        //Ensure question 7 is answered, alerts if not
        for (let i = 0; i < q7Response.length; i++) {
            if (!q7Response[i].checked) {
                document.getElementById("incompleteQ7").style.display = "block";
                questionsAnswered[6] = false;
            } else {
                document.getElementById("incompleteQ7").style.display = "none";
                questionsAnswered[6] = true;
                break;
            }
        }

        //looping through to ensure all questions answered
        for (let i = 0; i < questionsAnswered.length; i++) {
            if (questionsAnswered[i] === false) {
                formFilledCorrectly = false;
                break;
            } else {
                formFilledCorrectly = true;
            }
        }


        //if not all questions have been answered, form will not submit
        //all unanswered sections will show an alert, as well as an additional alert at the top of the page
        if (formFilledCorrectly) {
            document.getElementById("incompleteForm").style.display = "none";
            showResults();
        } else {
            verifyFilledQ1();
            verifyFilledQ2();
            verifyFilledQ3();
            verifyFilledQ4();
            document.getElementById("incompleteForm").style.display = "block";

        }
    }

    function showResults() {
        let totalPoints = 0;
        let finalGrade;

        let results = document.getElementById("results");
        let q1Results = document.getElementById("q1Results");
        let q2Results = document.getElementById("q2Results");
        let q3Results = document.getElementById("q3Results");
        let q4Results = document.getElementById("q4Results");
        let q5Results = document.getElementById("q5Results");
        let q6Results = document.getElementById("q6Results");
        let q7Results = document.getElementById("q7Results");


        //Question 1 verification
        if (q1Response.value.toLowerCase() === q1Answer) {
            q1Results.innerText = "Correct";
            totalPoints++;
        } else {
            q1Results.innerText = "Incorrect: The answer was: '" + q1Answer + "'";
        }


        //Question 2 verification
        if (q2Response.value.toLowerCase() === q2Answer) {
            q2Results.innerText = "Correct";
            totalPoints++;
        } else {
            q2Results.innerText = "Incorrect: The answer was: '" + q2Answer + "'";
        }


        //Question 3 verification
        if (q3Response.value === q3Answer) {
            q3Results.innerText = "Correct";
            totalPoints++;
        } else {
            q3Results.innerText = "Incorrect: The answer was: '" + q3Answer + "'";
        }

        //Question 4 verification
        if (q4Response.value === q4Answer) {
            q4Results.innerText = "Correct";
            totalPoints++;
        } else {
            q4Results.innerText = "Incorrect: The answer was: '" + q4Answer + "'";
        }

        //Question 5 verification
        if (q5Response[0].checked) {
            q5Results.innerText = "Correct";
            totalPoints++;
        } else {
            q5Results.innerText = "Incorrect: The answer was: '" + q5Answer.value + "'";
        }

        //Question 6 verification
        if (q6Response[2].checked) {
            q6Results.innerText = "Correct";
            totalPoints++;
        } else {
            q6Results.innerText = "Incorrect: The answer was: '" + q6Answer.value + "'";
        }

        //Question 7 verification
        if (q7Response[1].checked && q7Response[2].checked && !q7Response[0].checked && !q7Response[3].checked) {
            q7Results.innerText = "Correct";
            totalPoints++;
        } else {
            q7Results.innerText = "Incorrect: The answer was: '" + q7AnswerOne.value + "' and '" + q7AnswerTwo.value + "'";
        }

        finalGrade = ((totalPoints / 7) * 100);

        //sets color of final grade based on grade
        if (finalGrade < 50) {
            document.getElementById("totalScore").className = "redFont";
        } else if (finalGrade > 50 && finalGrade < 79) {
            document.getElementById("totalScore").className = "orangeFont";
        }


        document.getElementById("totalScore").innerText = "Total Score: " + finalGrade.toFixed(2) + "%";

        results.style.display = "block";

        //Hiding the submit button so that answers cannot be changed once the form has been accepted
        document.getElementById("submitAnswers").style.display = "none";


    }

    //resets the form
    function reset() {
        location.reload();
    }
}

window.addEventListener("load", init);