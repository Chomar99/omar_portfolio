document.addEventListener("DOMContentLoaded", () => {
    const quizForm = document.getElementById("quiz-form");
    const result = document.getElementById("quiz-result");
    const correctAnswersList = document.getElementById("correct-answers");

    quizForm.addEventListener("submit", (e) => {
        e.preventDefault();

        let score = 0;
        const correctAnswers = {
            q1: "A",
            q2: "B",
            q3: "A",
            q4: "A",
            q5: "C",
            q6: "B",
            q7: "C",
            q8: "A",
            q9: "B",
            q10: "C"
        };

        const userAnswers = {};
        for (let question in correctAnswers) {
            userAnswers[question] = document.querySelector(`input[name="${question}"]:checked`)?.value;
        }

        correctAnswersList.innerHTML = "";
        for (let question in correctAnswers) {
            if (userAnswers[question] === correctAnswers[question]) {
                score++;
            } else {
                const li = document.createElement("li");
                li.textContent = `Question ${question.replace('q', '')}: La bonne réponse est ${correctAnswers[question]}`;
                li.classList.add("list-group-item", "list-group-item-danger");
                correctAnswersList.appendChild(li);
            }
        }

        result.querySelector("p").textContent = `Votre score est de ${score}/${Object.keys(correctAnswers).length}.`;
        correctAnswersList.classList.remove("d-none");
    });
});
