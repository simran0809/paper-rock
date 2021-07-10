// cache collection of DOM elements
let userScore = 0;
let aiScore = 0;
const userScore_span = document.getElementById('user-score');
const aiScore_span = document.getElementById('ai-score');
const scoreboard_div = document.getElementById('scoreboard');
const game_status_div_p = document.querySelector('.game_status > p');
const user_label_p = document.getElementById('user-label');
const ai_label_p = document.getElementById('ai-label');
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');



function setup(){
    var canvas = createCanvas(1200,400);
}

// text
const playerNameUser = "(user)".fontsize(3).sup();
const playerNameAi = "(ai)".fontsize(3).sup();

const getAiChoice = () => {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const aiChoice = choices[Math.floor(Math.random() * Math.floor(choices.length))];
    return aiChoice;
}

const userWin = (userChoice, aiChoice) => {
    userScore++;
    userScore_span.innerHTML = userScore;
    game_status_div_p.innerHTML = (`${userChoice} ${playerNameUser} beats ${aiChoice} ${playerNameAi}, you win! 👍🏼`);
    scoreboard_div.classList.add('green-glow');
    userScore_span.classList.add('win-text');
    setTimeout(() => {
        scoreboard_div.classList.remove('green-glow');
        userScore_span.classList.remove('win-text');
    }, 1000);
};

const userLose = (userChoice, aiChoice) => {
    aiScore++;
    aiScore_span.innerHTML = aiScore;
    game_status_div_p.innerHTML = (`${aiChoice} ${playerNameAi} beats ${userChoice} ${playerNameUser}, you lose! 👎🏼`);
    scoreboard_div.classList.add('red-glow');
    aiScore_span.classList.add('lose-text');
    setTimeout(() => {
        scoreboard_div.classList.remove('red-glow');
        aiScore_span.classList.remove('lose-text');
    }, 1000);
}

const draw = (userChoice, aiChoice) => {
    game_status_div_p.innerHTML = (`${userChoice} ${playerNameUser} matches ${aiChoice} ${playerNameAi}, go again 👊🏼`);
    scoreboard_div.classList.add('grey-glow');
    userScore_span.classList.add('draw-text');
    aiScore_span.classList.add('draw-text');
    setTimeout(() => {
        scoreboard_div.classList.remove('grey-glow');
        userScore_span.classList.remove('draw-text');
        aiScore_span.classList.remove('draw-text');
    }, 1000);
}

const game = (userChoice) => {
    const aiChoice = getAiChoice();
    switch (userChoice + aiChoice) {
        case 'RockRock':
        case 'ScissorsScissors':
        case 'PaperPaper':
            draw(userChoice, aiChoice);
            break;
        case 'RockScissors':
        case 'PaperRock':
        case 'ScissorsPaper':
            userWin(userChoice, aiChoice);
            break;
        case 'RockPaper':
        case 'ScissorsRock':
        case 'PaperScissors':
            userLose(userChoice, aiChoice);
            break;
    }
}

const result = (userChoice, getAiChoice) => {
    let headline;
}

// event listeners
const main = () => {
    rock_div.addEventListener('click', () => {
        game("Rock");
    });
    paper_div.addEventListener('click', () => {
        game("Paper");
    });
    scissors_div.addEventListener('click', () => {
        game("Scissors");
    });
}

main();