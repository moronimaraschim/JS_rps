const score = document.getElementById("score");
const rock = document.getElementById("rock");
const paper  = document.getElementById("paper");
const scissor  = document.getElementById("scissor");
const rock2 = document.getElementById("rock2");
const paper2  = document.getElementById("paper2");
const scissor2  = document.getElementById("scissor2");
const result = document.getElementById("result");

let isPlaying = false;
let count = 0;

function play(sign) {
    const pcChoice = Math.ceil(Math.random()*3);

    switch(pcChoice) {
        case 1:
            rock2.classList.add("active");
            break;
        case 2:
            paper2.classList.add("active");
            break;
        case 3:
            scissor2.classList.add("active");
            break;
        default:
            break;
    }

    result.innerText = "Não foi dessa vez";

    if (sign == 1 && pcChoice == 3) {
        result.innerText = "Você Ganhou"
        count++
    }
    if (sign == 2 && pcChoice == 1) {
        result.innerText = "Você Ganhou"
        count++
    }
    if (sign == 3 && pcChoice == 2) {
        result.innerText = "Você Ganhou"
        count++
    }

    score.innerText = count;

    setTimeout(function(){reset()}, 500);
}

function handlePlay(choice) {
    if (!isPlaying) {  
        isPlaying = true;

        switch (choice) {
            case 1:
                rock.classList.add("active");
                setTimeout(function(){play(1)}, 200);
                break;
            case 2:
                paper.classList.add("active");
                setTimeout(function(){play(2)}, 200);
                break;
            case 3:
                scissor.classList.add("active");
                setTimeout(function(){play(3)}, 200);
                break;
            default:
                break;
        }
    }
}

function reset() {
    rock.classList.remove("active");
    paper.classList.remove("active");
    scissor.classList.remove("active");
    rock2.classList.remove("active");
    paper2.classList.remove("active");
    scissor2.classList.remove("active");
    result.innerText = "";
    isPlaying = false;
}

rock.addEventListener("click", function() {handlePlay(1)})
paper.addEventListener("click", function() {handlePlay(2)})
scissor.addEventListener("click", function() {handlePlay(3)})