const prompt = require("prompt-sync")();

function play() {
  const array = ["fire", "tree", "watter"];
  let userScore = 0,
    botScore = 0;
  const name = prompt("Tap here your pseudo : ")
  for (let i = 1; i <= 3; i++) {
    console.log(`\n`)
    const userCard = prompt("Enter your card : ").toLocaleLowerCase();
    let botCard = botTurn(array);
    const winnerPerParty = checkWin(userCard, botCard);
    console.log(`\n`)
    console.log(`${name} card : `)
    guiUser(userCard)
    console.log(`\n`)
    console.log(`Bot card : `)
    guiIa(botCard)
    console.log(`\n`)
    if (winnerPerParty == "user") {
      userScore += 1;
      console.log(`You won this  ! ${name} : ${userScore}   IA : ${botScore}`)
    } else if (winnerPerParty == "bot") {
      botScore += 1;
      console.log(`The bot win ! ${name} : ${userScore}   IA : ${botScore}`)
    }else{
      console.log(`Egality ! ${name} : ${userScore}   IA : ${botScore}`)
    }
  }
  return finalWinner(userScore, botScore);
}

function botTurn(array) {
  let val = array[Math.floor(Math.random() * 3)];
  return val;
}

function checkWin(user, bot) {
  if (user == bot) {
    return 0;
  } else if (user == "fire") {
    bot == "watter" ? (val = "bot") : (val = "user");
    return val;
  } else if (user == "watter") {
    bot == "fire" ? (val = "user") : (val = "bot");
    return val;
  } else if (user == "tree") {
    bot == "fire" ? (val = "bot") : (val = "user");
    return val;
  }
}

function finalWinner(userScore, botScore) {
  if (userScore < botScore) {
    console.log("\n");
    lose()
    console.log(`\n`)
    return `Lost !!! The bot win !!! his final score is : ${botScore}`;
  } else if (userScore > botScore) {
    console.log(`\n`)
    congrat();
    console.log(`\n`)
    return `Congratulations, you win !!! your final score is : ${userScore}`;
  } else {
    console.log(`\n`)
    console.log(
      `Good game, you have the same score yours : ${userScore} IA : ${botScore}`
    );
    console.log(`\n`)
    let playOrNot = prompt("Do you want to replay : ").toLocaleLowerCase();
    if (playOrNot == "yes") {
      console.log(`\n`)
      return play();
    } else {
      console.log(`\n`)
      return "You left the game. Thank for your participation.";
    }
  }
}

function menu() {
  console.log("\n");
  console.log("           WELCOME TO NOUM'S  CARD GAME                ");
  console.log("\n");
  console.log(" __________         __________        __________ ");
  console.log("| ' ' ' '  |       |          |      |    ^^    |");
  console.log("| '  () '  |       |~~ ~~ ~~  |      |   ^^^^   |");
  console.log("| () () () |       | ~~ ~~ ~~ |      |  ^^^^^^  |");
  console.log("|  ()()()  |       |~~ ~~ ~~  |      | ^^^^^^^^ |");
  console.log("|  //||\\\\  |       | ~~ ~~ ~~ |      |    ||    |");
  console.log("|          |       |~~ ~~ ~~  |      |   )||(   |");
  console.log("|__________|       |__________|      |__)_)(_(__| ");
  console.log("\n");
  console.log("    Fire              Watter             Tree     ");
  console.log("\n");
}
menu()
// fire()
// watter()
// tree()

console.log(play());

function fire(){
  console.log(" __________ ");
  console.log("| ' ' ' '  |");
  console.log("| '  () '  |");
  console.log("| () () () |");
  console.log("|  ()()()  |");
  console.log("|  //||\\\\  |");
  console.log("| // || \\\\ |");
  console.log("|__________|");
}

function watter(){
  console.log(" __________  ");
  console.log("|          |");
  console.log("|~~ ~~ ~~  |");
  console.log("| ~~ ~~ ~~ |");
  console.log("| ~~ ~~ ~~ |");
  console.log("|~~ ~~ ~~  | ");
  console.log("|~~ ~~ ~~  |");
  console.log("|__________| ");
}

function tree(){
  console.log(" __________ ");
  console.log("|    ^^    |");
  console.log("|   ^^^^   |");
  console.log("|  ^^^^^^  |");
  console.log("| ^^^^^^^^ |");
  console.log("|    ||    |");
  console.log("|   )||(   |");
  console.log("|__)_)(_(__| ");
}

function congrat(){
  console.log("      ___________      ")
  console.log("   \\\\/           \\//  ")
  console.log("    ||           ||  ")
  console.log("   | \\  WINNER   / |   ")
  console.log("   |  \\         /  |  ")
  console.log("    \\  \\       /  /  ")
  console.log("     \\__\\     /__/   ")
  console.log("         \\   /      ")
  console.log("          [_]        ")
  console.log("        _[___]_      ")
  console.log("       [_______]    " )
}

function lose(){
  console.log("      (((())))        ")
  console.log("    (((((())))))          ")
  console.log("   ((((((()))))))          ")
  console.log("  (((((((())))))))     ")
  console.log("  ((/          \\)) ")
  console.log("  /|  X      X  |\\ ");
  console.log("  \\|  ' ___  '  |/")
  console.log("    \\ '      ' /    ")
  console.log("     \\________/ ")
  console.log("               ")
}

function guiUser(userCard){
  if(userCard=="fire"){
    return fire()
  }else if(userCard=="watter"){
    return watter()
  }else{
    return tree()
  }
}

function guiIa(botCard){
  if(botCard=="fire"){
    return fire()
  }else if(botCard=="watter"){
    return watter()
  }else{
    return tree()
  }
}