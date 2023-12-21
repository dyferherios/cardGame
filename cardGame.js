const prompt = require("prompt-sync")();

/**
 * SHow the menu of the game
 * @function menu()
 */

function menu() {
  console.log("\n");
  console.log("           WELCOME TO NOUM'S  CARD GAME                ");
  console.log("\n");
  console.log("    Fire              water             Tree     ");
  console.log(" __________         __________        __________ ");
  console.log("| ' ' ' '  |       |          |      |    ^^    |");
  console.log("| '  () '  |       |~~ ~~ ~~  |      |   ^^^^   |");
  console.log("| () () () |       | ~~ ~~ ~~ |      |  ^^^^^^  |");
  console.log("|  ()()()  |       |~~ ~~ ~~  |      | ^^^^^^^^ |");
  console.log("|  //||\\\\  |       | ~~ ~~ ~~ |      |    ||    |");
  console.log("|          |       |~~ ~~ ~~  |      |   )||(   |");
  console.log("|__________|       |__________|      |__)_)(_(__| ");
  console.log("\n");
  console.log("                       MENU                       ");
  console.log("\n");
  console.log("        1. PLAY      2. ABOUT          3. QUIT ");
  console.log("\n\n");
}

/**
 * To ask the user if he/she wanna play or see game's description or quit the game
 * @function choiceMenu()
 * @returns Number
 */

function choiceMenu(){
  let choice = +prompt(`Enter your choice ${name} : `);
  return choice;
}

/**
 * SHow the fire's graphic
 * @function fire()
 */

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

/**
 * To show the water's graphic
 * @function water()
 */

function water(){
  console.log(" __________  ");
  console.log("|          |");
  console.log("|~~ ~~ ~~  |");
  console.log("| ~~ ~~ ~~ |");
  console.log("| ~~ ~~ ~~ |");
  console.log("|~~ ~~ ~~  | ");
  console.log("|~~ ~~ ~~  |");
  console.log("|__________| ");
}

/**
 * To show the tree's graphic
 * @function tree()
 */

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

/**
 * To show the congratulations' graphic
 * @function congrat()
 */

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

/**
 * TO show the lose's graphic
 *  @function lose()
 */

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

/**
 * TO show the description of the game
 * @function about()
 * @returns string
 */

function about(){
  return `This is a card game develepped by Freddy and Nomena. For playing this game you just tap 1, and tap 3 to quit. In the first step we ask you to enter one of water or fire or tree, and the bot choice randomly a value. THe fire bite the tree. The tree bite the water. And the water bite the fire.`;
}

/**
 * To put the graphic correspond to user card
 * @param {string} userCard 
 * @returns function
 */

function guiUser(userCard){
  if(userCard=="fire"){
    return fire()
  }else if(userCard=="water"){
    return water()
  }else{
    return tree()
  }
}

/**
 * To put the graphic correspond to bot card
 * @param {string} userCard 
 * @returns function
 */

function guiIa(botCard){
  if(botCard=="fire"){
    return fire()
  }else if(botCard=="water"){
    return water()
  }else{
    return tree()
  }
}

/**
 * TO take the bot's card randomly
 * @function botTurn
 * @param {string[]} array 
 * @returns string
 */

function botTurn(array) {
  let val = array[Math.floor(Math.random() * 3)];
  return val;
}

/**
 * To verify the winner to each round
 * @function checkWin()
 * @param {string} user 
 * @param {string} bot 
 * @returns string
 */

function checkWin(user, bot) {
  if (user == bot) {
    return 0;
  } else if (user == "fire") {
    bot == "water" ? (val = "bot") : (val = "user");
    return val;
  } else if (user == "water") {
    bot == "fire" ? (val = "user") : (val = "bot");
    return val;
  } else if (user == "tree") {
    bot == "fire" ? (val = "bot") : (val = "user");
    return val;
  }
}

/**
 * To show the winner winner finer of the 3 rounds
 * @function finalWinner()
 * @param {Number} userScore 
 * @param {Number} botScore
 * @returns function 
 */

function finalWinner(userScore, botScore) {
  if (userScore < botScore) {
    console.log("\n");
    lose()
    console.log(`\n Lost !!! The bot win !!! his final score is : ${botScore} \n`);
    return askToReplay()
  } else if (userScore > botScore) {
    console.log(`\n`)
    congrat();
    console.log(`\n Congratulations, you win !!! your final score is : ${userScore} \n`);
    return askToReplay()
  } else {
    console.log(
      `\n Good game, you have the same score yours : ${userScore} IA : ${botScore} \n`
    );
      return askToReplay()
  }
}

/**
 * To ask the user if he/she wanna play again
 * @function askToReplay()
 * @returns any
 */

function askToReplay(){
  console.log(`\n`)
  let playOrNot = prompt("Do you want to replay : ").toLocaleLowerCase();
  if (playOrNot == "yes") {
    console.log(`\n`)
    return play();
  } else {
    console.log(`\n Thank for your participation. You will be able return here if you wanna play.`)
    return 0;
  }
}

menu()
let name = prompt("What's your pseudo name : ")

/**
 * To begin the round of the game 
 * @function play()
 * @returns any
 */

function play() {
  console.log(`\n`)
  let playerChoice = choiceMenu();
  if(playerChoice==1){
    const array = ["fire", "tree", "water"];
    let userScore = 0,
      botScore = 0;
    for (let i = 1; i <= 3; i++) {
      console.log(`\n`)
      const userCard = prompt("Enter your card : ").toLocaleLowerCase();
      let botCard = botTurn(array);
      const winnerPerParty = checkWin(userCard, botCard);
      console.log(`\n ${name} card : `)
      guiUser(userCard)
      console.log(`\n Bot card : `)
      guiIa(botCard)
      console.log(`\n`)
      if (winnerPerParty == "user") {
        userScore += 1;
        console.log(`You won the round ${i} ! ${name} : ${userScore}   IA : ${botScore}`)
      } else if (winnerPerParty == "bot") {
        botScore += 1;
        console.log(`The bot win the round ${i} ! ${name} : ${userScore}   IA : ${botScore}`)
      }else{
        console.log(`Egality at the round ${i}! ${name} : ${userScore}   IA : ${botScore}`)
      }
    }
    return finalWinner(userScore, botScore);
  } else if(playerChoice == 2){
    console.log(`\n ${about()}`)
    const askToQuit = prompt("Press q to quit").toLocaleLowerCase();
    console.log(`\n`)
    if(askToQuit=="q"){
      return play();
    }
  }else if(playerChoice==3){
    console.log(`\n`)
    const askYesNot = prompt("Do you want to quit yes/no : ").toLocaleLowerCase();
    if(askYesNot=="no"){
      return play();
    }else{
      console.log(`\n Thank for your participation ${name}. You will be able return here if you wanna play.`)
      return 0;
    }
  }else{
    console.log("\n")
    return play()
  }
}



play();