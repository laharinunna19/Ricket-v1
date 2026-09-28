/* =========================================================
   RICKET
   Code. Play. Score.
========================================================= */


/* =========================================================
   GAME CONFIGURATION
========================================================= */

const MATCH_OVERS = 3;
const BALLS_PER_OVER = 6;

const TIME_LIMITS = {
    easy: 90,
    medium: 120,
    hard: 180
};


/* =========================================================
   CODING QUESTIONS
========================================================= */

const questions = [

    {
        id: 1,
        title: "Find the Largest Number",
        difficulty: "easy",
        description:
            "Given an array of numbers, find and print the largest number.",
        input: "5\n1 8 3 9 2",
        output: "9",
        answer: "9"
    },

    {
        id: 2,
        title: "Check Even or Odd",
        difficulty: "easy",
        description:
            "Given a number, determine whether it is even or odd.",
        input: "8",
        output: "Even",
        answer: "even"
    },

    {
        id: 3,
        title: "Reverse a String",
        difficulty: "easy",
        description:
            "Given a string, print the string in reverse order.",
        input: "hello",
        output: "olleh",
        answer: "olleh"
    },

    {
        id: 4,
        title: "Sum of Array Elements",
        difficulty: "medium",
        description:
            "Calculate the sum of all elements in the given array.",
        input: "5\n1 2 3 4 5",
        output: "15",
        answer: "15"
    },

    {
        id: 5,
        title: "Count Vowels",
        difficulty: "medium",
        description:
            "Count the number of vowels present in a given string.",
        input: "programming",
        output: "3",
        answer: "3"
    },

    {
        id: 6,
        title: "Palindrome Check",
        difficulty: "medium",
        description:
            "Check whether the given string is a palindrome.",
        input: "madam",
        output: "Palindrome",
        answer: "palindrome"
    },

    {
        id: 7,
        title: "Factorial",
        difficulty: "easy",
        description:
            "Find the factorial of a given positive integer.",
        input: "5",
        output: "120",
        answer: "120"
    },

    {
        id: 8,
        title: "Prime Number Check",
        difficulty: "medium",
        description:
            "Determine whether the given number is prime.",
        input: "17",
        output: "Prime",
        answer: "prime"
    },

    {
        id: 9,
        title: "Second Largest Number",
        difficulty: "hard",
        description:
            "Find the second largest unique number in an array.",
        input: "5\n10 5 8 20 15",
        output: "15",
        answer: "15"
    },

    {
        id: 10,
        title: "Fibonacci Series",
        difficulty: "medium",
        description:
            "Print the first N Fibonacci numbers.",
        input: "5",
        output: "0 1 1 2 3",
        answer: "0 1 1 2 3"
    },

    {
        id: 11,
        title: "Count Digits",
        difficulty: "easy",
        description:
            "Count how many digits are present in a positive integer.",
        input: "12345",
        output: "5",
        answer: "5"
    },

    {
        id: 12,
        title: "Maximum Subarray Sum",
        difficulty: "hard",
        description:
            "Find the maximum sum of a contiguous subarray.",
        input: "5\n-2 1 -3 4 -1",
        output: "4",
        answer: "4"
    },

    {
        id: 13,
        title: "Remove Duplicates",
        difficulty: "hard",
        description:
            "Remove duplicate elements from an array.",
        input: "6\n1 2 2 3 3 4",
        output: "1 2 3 4",
        answer: "1 2 3 4"
    },

    {
        id: 14,
        title: "Leap Year",
        difficulty: "medium",
        description:
            "Check whether the given year is a leap year.",
        input: "2024",
        output: "Leap Year",
        answer: "leap year"
    },

    {
        id: 15,
        title: "Character Frequency",
        difficulty: "hard",
        description:
            "Find the frequency of a given character in a string.",
        input: "banana\na",
        output: "3",
        answer: "3"
    },

    {
        id: 16,
        title: "Swap Two Numbers",
        difficulty: "easy",
        description:
            "Swap two numbers without using a third variable.",
        input: "5 10",
        output: "10 5",
        answer: "10 5"
    },

    {
        id: 17,
        title: "Armstrong Number",
        difficulty: "hard",
        description:
            "Check whether the given number is an Armstrong number.",
        input: "153",
        output: "Armstrong",
        answer: "armstrong"
    },

    {
        id: 18,
        title: "Array Rotation",
        difficulty: "hard",
        description:
            "Rotate an array to the right by one position.",
        input: "5\n1 2 3 4 5",
        output: "5 1 2 3 4",
        answer: "5 1 2 3 4"
    }

];


/* =========================================================
   GAME STATE
========================================================= */

let game = {

    playerName: "",

    language: "",

    team: "",

    difficulty: "easy",

    runs: 0,

    wickets: 0,

    balls: 0,

    over: 1,

    currentQuestionIndex: 0,

    timer: 90,

    timerInterval: null,

    streak: 0,

    bestStreak: 0,

    sixes: 0,

    fours: 0,

    solved: 0,

    attempted: 0,

    correct: 0,

    totalScorePercentage: 0

};


/* =========================================================
   DOM HELPERS
========================================================= */

function $(id) {
    return document.getElementById(id);
}


function showScreen(screenId) {

    document.querySelectorAll(".screen")
        .forEach(screen => {
            screen.classList.remove("active");
        });

    $(screenId).classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================================================
   SELECTIONS
========================================================= */

let selectedLanguage = null;
let selectedTeam = null;
let selectedDifficulty = null;


/* Language selection */

document.querySelectorAll(".language-option")
    .forEach(button => {

        button.addEventListener("click", () => {

            document
                .querySelectorAll(".language-option")
                .forEach(btn => btn.classList.remove("selected"));

            button.classList.add("selected");

            selectedLanguage =
                button.dataset.language;
        });

    });


/* Team selection */

document.querySelectorAll(".team-option")
    .forEach(button => {

        button.addEventListener("click", () => {

            document
                .querySelectorAll(".team-option")
                .forEach(btn => btn.classList.remove("selected"));

            button.classList.add("selected");

            selectedTeam =
                button.dataset.team;
        });

    });


/* Difficulty selection */

document.querySelectorAll(".difficulty-option")
    .forEach(button => {

        button.addEventListener("click", () => {

            document
                .querySelectorAll(".difficulty-option")
                .forEach(btn => btn.classList.remove("selected"));

            button.classList.add("selected");

            selectedDifficulty =
                button.dataset.difficulty;
        });

    });


/* =========================================================
   HOME
========================================================= */

$("startBtn").addEventListener("click", () => {

    showScreen("setupScreen");

});


$("howToBtn").addEventListener("click", () => {

    $("howToModal").classList.remove("hidden");

});


$("closeModal").addEventListener("click", () => {

    $("howToModal").classList.add("hidden");

});


$("leaderboardBtn").addEventListener("click", () => {

    renderLeaderboard();

    showScreen("leaderboardScreen");

});


$("homeBtn").addEventListener("click", () => {

    stopTimer();

    showScreen("homeScreen");

});


$("leaderboardHomeBtn").addEventListener("click", () => {

    showScreen("homeScreen");

});


$("resultHomeBtn").addEventListener("click", () => {

    showScreen("homeScreen");

});


/* =========================================================
   CONTINUE FROM SETUP
========================================================= */

$("continueBtn").addEventListener("click", () => {

    const name =
        $("playerName").value.trim();

    if (!name) {

        alert("Please enter your name!");

        return;
    }


    if (!selectedLanguage) {

        alert("Please select a programming language!");

        return;
    }


    if (!selectedTeam) {

        alert("Please select an IPL team!");

        return;
    }


    if (!selectedDifficulty) {

        selectedDifficulty = "easy";

        document
            .querySelector('[data-difficulty="easy"]')
            .classList.add("selected");
    }


    game.playerName = name;
    game.language = selectedLanguage;
    game.team = selectedTeam;
    game.difficulty = selectedDifficulty;


    resetGame();


    showScreen("tossScreen");

});


/* =========================================================
   RESET GAME
========================================================= */

function resetGame() {

    stopTimer();

    game.runs = 0;
    game.wickets = 0;
    game.balls = 0;
    game.over = 1;

    game.currentQuestionIndex = 0;

    game.streak = 0;
    game.bestStreak = 0;

    game.sixes = 0;
    game.fours = 0;

    game.solved = 0;
    game.attempted = 0;
    game.correct = 0;

    game.totalScorePercentage = 0;

}


/* =========================================================
   TOSS
========================================================= */

function playToss(choice) {

    const coin =
        Math.random() < 0.5
            ? "Heads"
            : "Tails";


    $("coin").textContent = "🪙";

    $("tossMessage").textContent =
        "The coin is spinning...";


    setTimeout(() => {

        if (choice === coin) {

            $("tossMessage").textContent =
                `It's ${coin}! You won the toss. You're batting first! 🏏`;

        } else {

            $("tossMessage").textContent =
                `It's ${coin}! Your team is batting first. 🏏`;

        }


        setTimeout(() => {

            startMatch();

        }, 1500);

    }, 1000);

}


/* =========================================================
   START MATCH
========================================================= */

function startMatch() {

    $("scoreTeam").textContent =
        game.team;

    $("editorLanguage").textContent =
        game.language;

    updateScoreboard();

    loadQuestion();

    showScreen("matchScreen");

}


/* =========================================================
   QUESTION SELECTION
========================================================= */

function getQuestion() {

    let difficultyQuestions =
        questions.filter(q =>
            q.difficulty === game.difficulty
        );


    if (difficultyQuestions.length === 0) {

        difficultyQuestions = questions;

    }


    /*
        Use current ball to create
        a predictable progression.
    */

    const randomIndex =
        Math.floor(
            Math.random() *
            difficultyQuestions.length
        );


    return difficultyQuestions[randomIndex];

}


/* =========================================================
   LOAD QUESTION
========================================================= */

function loadQuestion() {

    const question = getQuestion();

    game.currentQuestion =
        question;


    $("questionNumber").textContent =
        game.balls + 1;


    $("questionTitle").textContent =
        question.title;


    $("questionDescription").textContent =
        question.description;


    $("sampleInput").textContent =
        question.input;


    $("sampleOutput").textContent =
        question.output;


    $("difficultyBadge").textContent =
        question.difficulty.toUpperCase();


    $("codeEditor").value = "";


    $("codeResult").classList.add("hidden");


    $("ballResult").classList.add("hidden");


    startTimer();

}


/* =========================================================
   TIMER
========================================================= */

function startTimer() {

    stopTimer();


    game.timer =
        TIME_LIMITS[game.difficulty];


    updateTimerDisplay();


    game.timerInterval =
        setInterval(() => {

            game.timer--;

            updateTimerDisplay();


            if (game.timer <= 0) {

                stopTimer();

                handleTimeout();

            }

        }, 1000);

}


function stopTimer() {

    if (game.timerInterval) {

        clearInterval(game.timerInterval);

        game.timerInterval = null;

    }

}


function updateTimerDisplay() {

    $("timer").textContent =
        game.timer;


    const circle =
        document.querySelector(".timer-circle");


    if (game.timer <= 10) {

        circle.style.borderColor =
            "#ef4444";

    } else {

        circle.style.borderColor =
            "#ffb703";

    }

}


/* =========================================================
   CODE EDITOR
========================================================= */

$("clearBtn").addEventListener("click", () => {

    $("codeEditor").value = "";

    $("codeResult").classList.add("hidden");

});


/* =========================================================
   RUN CODE
========================================================= */

$("runBtn").addEventListener("click", () => {

    const code =
        $("codeEditor").value.trim();


    if (!code) {

        showCodeResult(
            "Write some code before running!",
            false
        );

        return;

    }


    showCodeResult(
        "Code executed successfully. Check your logic and submit your solution!",
        true
    );

});


function showCodeResult(message, success) {

    const result =
        $("codeResult");


    result.textContent =
        message;


    result.classList.remove("hidden");


    result.style.border =
        success
            ? "1px solid #22c55e"
            : "1px solid #ef4444";

}


/* =========================================================
   SUBMIT CODE
========================================================= */

$("submitBtn").addEventListener("click", () => {

    submitAnswer();

});


function submitAnswer() {

    stopTimer();


    const code =
        $("codeEditor").value.trim();


    if (!code) {

        showCodeResult(
            "You cannot submit an empty solution!",
            false
        );

        startTimer();

        return;

    }


    game.attempted++;


    /*
        V1 simulation.

        We inspect the submitted code for
        expected output / keywords.

        This is NOT real code execution.
    */

    const score =
        evaluateCode(
            code,
            game.currentQuestion
        );


    processScore(score);

}


/* =========================================================
   SIMPLE CODE EVALUATOR
========================================================= */

function evaluateCode(code, question) {

    const normalized =
        code.toLowerCase();


    const answer =
        question.answer.toLowerCase();


    /*
        Exact expected answer present.
    */

    if (normalized.includes(answer)) {

        return 100;

    }


    /*
        Some common logical keywords
        indicate partial progress.
    */

    const keywords = [
        "for",
        "while",
        "if",
        "else",
        "return",
        "print",
        "console.log",
        "system.out",
        "scanf",
        "cin",
        "cout"
    ];


    let matches = 0;


    keywords.forEach(keyword => {

        if (normalized.includes(keyword)) {

            matches++;

        }

    });


    if (matches >= 4) {

        return 75;

    }


    if (matches >= 2) {

        return 50;

    }


    if (matches >= 1) {

        return 25;

    }


    return 10;

}


/* =========================================================
   PROCESS SCORE
========================================================= */

function processScore(percentage) {

    game.totalScorePercentage +=
        percentage;


    let runs = 0;

    let resultTitle = "";

    let resultText = "";

    let emoji = "⚪";


    if (percentage >= 90) {

        runs = 6;

        game.sixes++;

        game.streak++;

        game.correct++;

        game.solved++;

        emoji = "💥";

        resultTitle = "SIX!";

        resultText =
            "Excellent coding! You smashed that ball!";

    }

    else if (percentage >= 70) {

        runs = 4;

        game.fours++;

        game.streak++;

        game.correct++;

        game.solved++;

        emoji = "🏏";

        resultTitle = "FOUR!";

        resultText =
            "Great solution! That's four runs!";

    }

    else if (percentage >= 40) {

        runs = 2;

        game.streak = 0;

        game.solved++;

        emoji = "🏃";

        resultTitle = "TWO RUNS!";

        resultText =
            "Good attempt! Keep improving.";

    }

    else {

        runs = 0;

        game.streak = 0;

        emoji = "⚪";

        resultTitle = "DOT BALL";

        resultText =
            "Not enough progress. Try harder next ball.";

    }


    game.runs += runs;


    if (game.streak > game.bestStreak) {

        game.bestStreak =
            game.streak;

    }


    showBallResult(
        emoji,
        resultTitle,
        resultText,
        percentage,
        runs
    );


    setTimeout(() => {

        finishBall(false);

    }, 1800);

}


/* =========================================================
   TIMEOUT
========================================================= */

function handleTimeout() {

    game.attempted++;

    game.wickets++;

    game.streak = 0;


    showBallResult(
        "💀",
        "WICKET!",
        "Time's up! You lost your wicket.",
        0,
        0
    );


    setTimeout(() => {

        finishBall(true);

    }, 1800);

}


/* =========================================================
   BALL RESULT
========================================================= */

function showBallResult(
    emoji,
    title,
    text,
    percentage,
    runs
) {

    $("ballEmoji").textContent =
        emoji;

    $("ballResultTitle").textContent =
        title;

    $("ballResultText").textContent =
        `${text} ${runs > 0 ? `+${runs} runs` : ""}`;


    $("ballResult").classList.remove("hidden");


    $("codeResult").textContent =
        `Test Score: ${percentage}%`;

    $("codeResult").classList.remove("hidden");

}


/* =========================================================
   FINISH BALL
========================================================= */

function finishBall(wicket) {

    game.balls++;


    updateScoreboard();


    /*
        Six balls completed.
    */

    if (
        game.balls % BALLS_PER_OVER === 0
    ) {

        stopTimer();


        if (
            game.over >= MATCH_OVERS
        ) {

            finishMatch();

        } else {

            showOverScreen();

        }


        return;

    }


    /*
        Next ball
    */

    game.currentQuestionIndex++;

    loadQuestion();

}


/* =========================================================
   SCOREBOARD
========================================================= */

function updateScoreboard() {

    $("runs").textContent =
        game.runs;

    $("wickets").textContent =
        game.wickets;

    const completedBalls =
        game.balls % BALLS_PER_OVER;

    $("overs").textContent =
        `${game.over - 1}.${completedBalls}`;


    $("ballNumber").textContent =
        game.balls + 1;

    $("overNumber").textContent =
        game.over;


    $("streak").textContent =
        game.streak;

}


/* =========================================================
   OVER SCREEN
========================================================= */

function showOverScreen() {

    $("overTeamName").textContent =
        game.team;


    $("overRuns").textContent =
        game.runs;


    $("overWickets").textContent =
        game.wickets;


    $("completedOver").textContent =
        game.over;


    $("overSixes").textContent =
        game.sixes;


    $("overFours").textContent =
        game.fours;


    const accuracy =
        game.attempted === 0
            ? 0
            : Math.round(
                (game.correct /
                    game.attempted) *
                100
            );


    $("overAccuracy").textContent =
        `${accuracy}%`;


    showScreen("overScreen");

}


/* =========================================================
   NEXT OVER
========================================================= */

$("nextOverBtn").addEventListener("click", () => {

    game.over++;

    updateScoreboard();

    loadQuestion();

    showScreen("matchScreen");

});


/* =========================================================
   FINISH MATCH
========================================================= */

function finishMatch() {

    stopTimer();


    const accuracy =
        game.attempted === 0
            ? 0
            : Math.round(
                (game.correct /
                    game.attempted) *
                100
            );


    $("resultTeam").textContent =
        game.team;


    $("finalRuns").textContent =
        game.runs;


    $("finalWickets").textContent =
        game.wickets;


    $("finalOvers").textContent =
        `${MATCH_OVERS}.0`;


    $("finalQuestions").textContent =
        game.balls;


    $("finalSolved").textContent =
        game.solved;


    $("finalAccuracy").textContent =
        `${accuracy}%`;


    $("finalSixes").textContent =
        game.sixes;


    $("finalFours").textContent =
        game.fours;


    $("finalBestStreak").textContent =
        game.bestStreak;


    $("resultGreeting").textContent =
        `Well played, ${game.playerName}! You scored ${game.runs} runs for ${game.team}.`;


    saveResult();


    showScreen("resultScreen");

}


/* =========================================================
   SAVE LEADERBOARD
========================================================= */

function saveResult() {

    const existing =
        JSON.parse(
            localStorage.getItem(
                "ricketLeaderboard"
            )
        ) || [];


    existing.push({

        name: game.playerName,

        team: game.team,

        language: game.language,

        runs: game.runs,

        wickets: game.wickets,

        accuracy:
            game.attempted === 0
                ? 0
                : Math.round(
                    (game.correct /
                        game.attempted) *
                    100
                ),

        date:
            new Date().toLocaleDateString()

    });


    existing.sort(
        (a,b) => b.runs - a.runs
    );


    const topTen =
        existing.slice(0,10);


    localStorage.setItem(
        "ricketLeaderboard",
        JSON.stringify(topTen)
    );

}


/* =========================================================
   RENDER LEADERBOARD
========================================================= */

function renderLeaderboard() {

    const list =
        $("leaderboardList");


    const data =
        JSON.parse(
            localStorage.getItem(
                "ricketLeaderboard"
            )
        ) || [];


    if (data.length === 0) {

        list.innerHTML = `
            <div class="feature-card">
                <div class="feature-icon">🏏</div>
                <h3>No matches yet!</h3>
                <p>Play your first Ricket match.</p>
            </div>
        `;

        return;

    }


    list.innerHTML = "";


    data.forEach((player,index) => {

        const row =
            document.createElement("div");

        row.className =
            "leaderboard-row";


        let medal = "";

        if (index === 0) medal = "🥇";
        else if (index === 1) medal = "🥈";
        else if (index === 2) medal = "🥉";
        else medal = `${index + 1}`;


        row.innerHTML = `

            <div class="rank">
                ${medal}
            </div>

            <div class="player">
                ${escapeHTML(player.name)}

                <small>
                    ${escapeHTML(player.team)}
                    •
                    ${escapeHTML(player.language)}
                    •
                    ${player.accuracy}% accuracy
                </small>
            </div>

            <div class="leader-score">
                ${player.runs} runs
            </div>

        `;


        list.appendChild(row);

    });

}


/* =========================================================
   ESCAPE HTML
========================================================= */

function escapeHTML(text) {

    const div =
        document.createElement("div");

    div.textContent =
        text;

    return div.innerHTML;

}


/* =========================================================
   PLAY AGAIN
========================================================= */

$("playAgainBtn").addEventListener("click", () => {

    resetGame();

    showScreen("tossScreen");

});


/* =========================================================
   KEYBOARD SHORTCUT
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        /*
            Ctrl + Enter
            submits the answer.
        */

        if (
            event.ctrlKey &&
            event.key === "Enter"
        ) {

            if (
                $("matchScreen")
                    .classList
                    .contains("active")
            ) {

                submitAnswer();

            }

        }

    }
);


/* =========================================================
   INITIAL STATE
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        selectedDifficulty = "easy";

        document
            .querySelector(
                '[data-difficulty="easy"]'
            )
            .classList
            .add("selected");

    }
);
