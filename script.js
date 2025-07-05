
scoreEl1 = document.getElementById("team1-score");
scoreEl2 = document.getElementById("team2-score");


let team1score = 0;
let team2score = 0;

// Functions for Team 1
function incrementScore1by1() {
    team1score += 1;
    scoreEl1.textContent = team1score;
}

function incrementScore1by2() {
    team1score += 2;
    scoreEl1.textContent = team1score;
}

function incrementScore1by3() {
    team1score += 3;
    scoreEl1.textContent = team1score;
}

// Functions for Team 2
function incrementScore2by1() {
    team2score += 1;
    scoreEl2.textContent = team2score;
}

function incrementScore2by2() {
    team2score += 2;
    scoreEl2.textContent = team2score;
}

function incrementScore2by3() {
    team2score += 3;
    scoreEl2.textContent = team2score;
}

function resetScores() {
    team1score = 0;
    team2score = 0;
    scoreEl1.textContent = team1score;
    scoreEl2.textContent = team2score;
}   