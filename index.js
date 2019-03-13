// check if player one's or two's turn
let playerOneTurn;
// player one's identity
let playerOneID;
//stores IDs of player one's plays
let playerOnePlays = [];
//stores IDs of player two's plays
let playerTwoPlays = [];
//winning combination of boxes
let winningBoxes = [];
// holds scores
let playerScores = {
  playerOne: 0,
  playerTwo: 0
};
// this boolean varaible is toggled based on game status
let gameEnded = false;
// boolean variable to check for a draw
let isDraw = false;

// SVG Shapes: X, O
const shapeX = `<svg id="shapeXContainer" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  viewBox="0 0 417.503 418.45">
<defs>
  <filter id="shapeX" x="0" y="0" width="417.503" height="418.45" filterUnits="userSpaceOnUse">
    <feOffset dy="10" input="SourceAlpha"/>
    <feGaussianBlur stdDeviation="3" result="blur"/>
    <feFlood flood-opacity="0.161"/>
    <feComposite operator="in" in2="blur"/>
    <feComposite in="SourceGraphic"/>
  </filter>
</defs>
<g id="shapeX-2" data-name="shapeX" transform="translate(-230.269 -242.335)">
  <g transform="matrix(1, 0, 0, 1, 230.27, 242.34)" filter="url(#shapeX)">
    <path id="shapeX-3" data-name="shapeX" d="M-3763.743,407.13l-106.1-106.1-106.1,106.1a30,30,0,0,1-42.426,0l-42.434-42.434a30,30,0,0,1,0-42.426l106.1-106.1-106.051-106.051a30,30,0,0,1,0-42.426l42.434-42.434a30,30,0,0,1,42.426,0l106.052,106.051L-3763.8,25.254a30,30,0,0,1,42.426,0l42.434,42.434a30,30,0,0,1,0,42.426l-106.051,106.051,106.1,106.1a30,30,0,0,1,0,42.426l-42.435,42.434a29.9,29.9,0,0,1-21.213,8.787A29.906,29.906,0,0,1-3763.743,407.13Z" transform="translate(4078.6 -16.47)" fill="#db6c6c"/>
  </g>
</g>
</svg>

`;
const shapeO = `<svg id="shapeOContainer" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  viewBox="0 0 418 419">
<defs>
  <filter id="shapeO" x="0" y="0" width="418" height="419" filterUnits="userSpaceOnUse">
    <feOffset dy="10" input="SourceAlpha"/>
    <feGaussianBlur stdDeviation="3" result="blur"/>
    <feFlood flood-opacity="0.161"/>
    <feComposite operator="in" in2="blur"/>
    <feComposite in="SourceGraphic"/>
  </filter>
</defs>
<g id="shapeO-2" data-name="shapeO" transform="translate(-1245 -442)">
  <g transform="matrix(1, 0, 0, 1, 1245, 442)" filter="url(#shapeO)">
    <path id="shapeO-3" data-name="shapeO" d="M-3780,400a201.476,201.476,0,0,1-40.307-4.063,199,199,0,0,1-37.542-11.654,200.024,200.024,0,0,1-33.973-18.44,201.433,201.433,0,0,1-29.6-24.422,201.393,201.393,0,0,1-24.422-29.6,200.014,200.014,0,0,1-18.44-33.973,199.027,199.027,0,0,1-11.654-37.542A201.466,201.466,0,0,1-3980,200a201.467,201.467,0,0,1,4.063-40.307,199.03,199.03,0,0,1,11.654-37.542,199.985,199.985,0,0,1,18.44-33.973,201.394,201.394,0,0,1,24.422-29.6,201.44,201.44,0,0,1,29.6-24.422,200.016,200.016,0,0,1,33.973-18.44,199,199,0,0,1,37.542-11.654A201.472,201.472,0,0,1-3780,0a201.473,201.473,0,0,1,40.307,4.063,199,199,0,0,1,37.542,11.654,200.037,200.037,0,0,1,33.973,18.44,201.444,201.444,0,0,1,29.6,24.422,201.421,201.421,0,0,1,24.421,29.6,200,200,0,0,1,18.44,33.973,198.968,198.968,0,0,1,11.654,37.542A201.467,201.467,0,0,1-3580,200a201.466,201.466,0,0,1-4.063,40.307,198.969,198.969,0,0,1-11.654,37.542,200,200,0,0,1-18.44,33.973,201.426,201.426,0,0,1-24.421,29.6,201.437,201.437,0,0,1-29.6,24.422,200.042,200.042,0,0,1-33.973,18.44,199.013,199.013,0,0,1-37.542,11.654A201.473,201.473,0,0,1-3780,400Zm0-300a100.113,100.113,0,0,0-100,100,100.113,100.113,0,0,0,100,100,100.113,100.113,0,0,0,100-100A100.113,100.113,0,0,0-3780,100Z" transform="translate(3989 0)" fill="#6cc0db"/>
  </g>
</g>
</svg>

`;

//holds all the box IDs
const box = [
  "box1",
  "box2",
  "box3",
  "box4",
  "box5",
  "box6",
  "box7",
  "box8",
  "box9"
];

function setUpApp() {
  //Hide the result label
  document.getElementById("msgLabelContainer").style.top =
    -1 * getHeight() + "px";

  whichPlayerStarts();
  assignPlayerIdentity();
  showPlayerIdentification();
}

// randomly pick which player starts the game
function whichPlayerStarts() {
  let rand = Math.floor(Math.random() * 2) + 0;

  if (rand === 0) {
    playerOneTurn = true;
  } else {
    playerOneTurn = false;
  }
}

// randomly pick which player identity - X or O
function assignPlayerIdentity() {
  let rand = Math.floor(Math.random() * 2) + 0;

  if (rand === 0) {
    playerOneID = 0;
    document.getElementById("playerOneIdentity").innerHTML = shapeX;
    document.getElementById("playerTwoIdentity").innerHTML = shapeO;
  } else {
    playerOneID = 1;
    document.getElementById("playerOneIdentity").innerHTML = shapeO;
    document.getElementById("playerTwoIdentity").innerHTML = shapeX;
  }
}

//gets the width of the body
function getHeight() {
  return Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.documentElement.clientHeight
  );
}

//gets the width of the body
function getWidth() {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  );
}

// game starting transitions
// show player IDs
function showPlayerIdentification() {
  const width = getWidth();

  document.getElementById("playerOne").parentElement.style.opacity = 1;

  document.getElementById("playerTwoIdentity").parentElement.style.opacity = 1;
  document.getElementById("playerOneIdentity").parentElement.style.opacity = 1;

  document.getElementById("playerTwo").parentElement.style.opacity = 1;

  setTimeout(function() {
    document.getElementById("playerIdentificationContainer").style.transform =
      "translateX(" + -1 * width + "px)";
    if (playerOneTurn) {
      if (playerOneID === 0) {
        document.getElementById("msgLabel").style.color = "#db6c6c";
        document.getElementById("msgLabel").innerHTML = "You Start";
      } else {
        document.getElementById("msgLabel").style.color = "#6cc0db";
        document.getElementById("msgLabel").innerHTML = "You Start";
      }
    } else {
      if (playerOneID === 1) {
        document.getElementById("msgLabel").style.color = "#db6c6c";
        document.getElementById("msgLabel").innerHTML = "Player2 Starts";
      } else {
        document.getElementById("msgLabel").style.color = "#6cc0db";
        document.getElementById("msgLabel").innerHTML = "Player2 Starts";
      }
    }

    document.getElementById("gameContainer").style.opacity = 0.5;
    document.getElementById("scoresContainer").style.opacity = 0.5;

    document.getElementById("msgLabelContainer").style.transform =
      "translateY(" + getHeight() + "px)";
  }, 3000);

  setTimeout(function() {
    document.getElementById("playerOne").parentElement.style.opacity = 0;

    document.getElementById(
      "playerTwoIdentity"
    ).parentElement.style.opacity = 0;
    document.getElementById(
      "playerOneIdentity"
    ).parentElement.style.opacity = 0;

    document.getElementById("playerTwo").parentElement.style.opacity = 0;

    document.getElementById("msgLabelContainer").style.transform =
      "translateY(" + 0 + "px)";
    document.getElementById("gameContainer").style.opacity = 1;
    document.getElementById("scoresContainer").style.opacity = 1;
  }, 5500);
}

// Check if game has ended by looking at 3 consecutive
// boxes in all directions
// 8 ways to win - 3 vertical, 3 horizontal, 2 diagonal
function checkWinScenariosWithPlayerPlays(latestPlay, playerPlays) {
  //Set this true if win
  let aWin = true;

  switch (latestPlay) {
    case "box1":
      if (
        playerPlays.indexOf("box2") != -1 &&
        playerPlays.indexOf("box3") != -1
      ) {
        winningBoxes.push("box1", "box2", "box3");
      } else if (
        playerPlays.indexOf("box4") != -1 &&
        playerPlays.indexOf("box7") != -1
      ) {
        winningBoxes.push("box1", "box4", "box7");
      } else if (
        playerPlays.indexOf("box5") != -1 &&
        playerPlays.indexOf("box9") != -1
      ) {
        winningBoxes.push("box1", "box5", "box9");
      } else {
        aWin = false;
      }
      break;
    case "box2":
      if (
        playerPlays.indexOf("box1") != -1 &&
        playerPlays.indexOf("box3") != -1
      ) {
        winningBoxes.push("box1", "box2", "box3");
      } else if (
        playerPlays.indexOf("box5") != -1 &&
        playerPlays.indexOf("box8") != -1
      ) {
        winningBoxes.push("box2", "box5", "box8");
      } else {
        aWin = false;
      }
      break;
    case "box3":
      if (
        playerPlays.indexOf("box1") != -1 &&
        playerPlays.indexOf("box2") != -1
      ) {
        winningBoxes.push("box1", "box2", "box3");
      } else if (
        playerPlays.indexOf("box6") != -1 &&
        playerPlays.indexOf("box9") != -1
      ) {
        winningBoxes.push("box3", "box6", "box9");
      } else if (
        playerPlays.indexOf("box5") != -1 &&
        playerPlays.indexOf("box7") != -1
      ) {
        winningBoxes.push("box3", "box5", "box7");
      } else {
        aWin = false;
      }
      break;
    case "box4":
      if (
        playerPlays.indexOf("box1") != -1 &&
        playerPlays.indexOf("box7") != -1
      ) {
        winningBoxes.push("box1", "box4", "box7");
      } else if (
        playerPlays.indexOf("box5") != -1 &&
        playerPlays.indexOf("box6") != -1
      ) {
        winningBoxes.push("box4", "box5", "box6");
      } else {
        aWin = false;
      }
      break;
    case "box5":
      if (
        playerPlays.indexOf("box2") != -1 &&
        playerPlays.indexOf("box8") != -1
      ) {
        winningBoxes.push("box2", "box5", "box8");
      } else if (
        playerPlays.indexOf("box4") != -1 &&
        playerPlays.indexOf("box6") != -1
      ) {
        winningBoxes.push("box4", "box5", "box6");
      } else if (
        playerPlays.indexOf("box1") != -1 &&
        playerPlays.indexOf("box9") != -1
      ) {
        winningBoxes.push("box1", "box5", "box9");
      } else if (
        playerPlays.indexOf("box3") != -1 &&
        playerPlays.indexOf("box7") != -1
      ) {
        winningBoxes.push("box3", "box5", "box7");
      } else {
        aWin = false;
      }
      break;
    case "box6":
      if (
        playerPlays.indexOf("box3") != -1 &&
        playerPlays.indexOf("box9") != -1
      ) {
        winningBoxes.push("box3", "box6", "box9");
      } else if (
        playerPlays.indexOf("box4") != -1 &&
        playerPlays.indexOf("box5") != -1
      ) {
        winningBoxes.push("box4", "box5", "box6");
      } else {
        aWin = false;
      }
      break;
    case "box7":
      if (
        playerPlays.indexOf("box1") != -1 &&
        playerPlays.indexOf("box4") != -1
      ) {
        winningBoxes.push("box1", "box4", "box7");
      } else if (
        playerPlays.indexOf("box8") != -1 &&
        playerPlays.indexOf("box9") != -1
      ) {
        winningBoxes.push("box7", "box8", "box9");
      } else if (
        playerPlays.indexOf("box3") != -1 &&
        playerPlays.indexOf("box5") != -1
      ) {
        winningBoxes.push("box3", "box5", "box7");
      } else {
        aWin = false;
      }
      break;
    case "box8":
      if (
        playerPlays.indexOf("box2") != -1 &&
        playerPlays.indexOf("box5") != -1
      ) {
        winningBoxes.push("box2", "box5", "box8");
      } else if (
        playerPlays.indexOf("box7") != -1 &&
        playerPlays.indexOf("box9") != -1
      ) {
        winningBoxes.push("box7", "box8", "box9");
      } else {
        aWin = false;
      }
      break;
    case "box9":
      if (
        playerPlays.indexOf("box3") != -1 &&
        playerPlays.indexOf("box6") != -1
      ) {
        winningBoxes.push("box3", "box6", "box9");
      } else if (
        playerPlays.indexOf("box7") != -1 &&
        playerPlays.indexOf("box8") != -1
      ) {
        winningBoxes.push("box7", "box8", "box9");
      } else if (
        playerPlays.indexOf("box1") != -1 &&
        playerPlays.indexOf("box5") != -1
      ) {
        winningBoxes.push("box1", "box5", "box9");
      } else {
        aWin = false;
      }
  }

  return aWin;
}

// checks if current player has won
// Uses latest play to determine result
// Only starts checking if one of the player has played 3 times
function calculateResult() {
  let playerDidWin = false;

  if (playerOnePlays.length >= 3 || playerTwoPlays.length >= 3) {
    if (playerOneTurn) {
      playerDidWin = checkWinScenariosWithPlayerPlays(
        playerOnePlays[playerOnePlays.length - 1],
        playerOnePlays
      );
    } else {
      playerDidWin = checkWinScenariosWithPlayerPlays(
        playerTwoPlays[playerTwoPlays.length - 1],
        playerTwoPlays
      );
    }
  }

  if (playerOnePlays.length + playerTwoPlays.length === 9 && !playerDidWin) {
    gameEnded = true;
    isDraw = true;
    displayWinnerMessage();
  }
  return playerDidWin;
}

// show scores dynamically
function showScore() {
  document.getElementById("playerOneScore").innerHTML =
    playerScores["playerOne"];
  document.getElementById("playerTwoScore").innerHTML =
    playerScores["playerTwo"];
}

// Reset the game to start another round
function startNextRound() {
  for (let index = 0; index < box.length; index++) {
    let currentElement = document.getElementById(box[index]);
    currentElement.innerHTML = "";
    if (currentElement.classList.contains("boxActiveByPlayerOne")) {
      currentElement.classList.remove("boxActiveByPlayerOne");
    } else if (currentElement.classList.contains("boxActiveByPlayerTwo")) {
      currentElement.classList.remove("boxActiveByPlayerTwo");
    } else {
      continue;
    }
  }
  // pick player to start next round
  whichPlayerStarts();
  if (playerOneTurn) {
    if (playerOneID === 0) {
      document.getElementById("msgLabel").style.color = "#db6c6c";
      document.getElementById("msgLabel").innerHTML = "You Start";
    } else {
      document.getElementById("msgLabel").style.color = "#6cc0db";
      document.getElementById("msgLabel").innerHTML = "You Start";
    }
  } else {
    if (playerOneID === 1) {
      document.getElementById("msgLabel").style.color = "#db6c6c";
      document.getElementById("msgLabel").innerHTML = "Player2 Starts";
    } else {
      document.getElementById("msgLabel").style.color = "#6cc0db";
      document.getElementById("msgLabel").innerHTML = "Player2 Starts";
    }
  }
  document.getElementById("gameContainer").style.opacity = 0.5;
  document.getElementById("scoresContainer").style.opacity = 0.5;
  document.getElementById("msgLabelContainer").style.transform =
    "translateY(" + getHeight() + "px)";

  setTimeout(function() {
    document.getElementById("msgLabelContainer").style.transform =
      "translateY(" + 0 + "px)";
    document.getElementById("gameContainer").style.opacity = 1;
    document.getElementById("scoresContainer").style.opacity = 1;
  }, 1500);

  if (!isDraw) {
    document.getElementById(winningBoxes[0]).style.backgroundColor = "#fff";
    document.getElementById(winningBoxes[1]).style.backgroundColor = "#fff";
    document.getElementById(winningBoxes[2]).style.backgroundColor = "#fff";
  }

  // reset Winning boxes array
  winningBoxes = [];
  // reset player plays
  playerOnePlays = [];
  playerTwoPlays = [];

  // reset game status
  gameEnded = false;
  // reset draw status
  isDraw = false;

  document.getElementById("playAgainBtnContainer").style.opacity = 0;
}

// Reset the game to start another round
function resetGame() {
  for (let index = 0; index < box.length; index++) {
    let currentElement = document.getElementById(box[index]);
    currentElement.innerHTML = "";
    if (currentElement.classList.contains("boxActiveByPlayerOne")) {
      currentElement.classList.remove("boxActiveByPlayerOne");
    } else if (currentElement.classList.contains("boxActiveByPlayerTwo")) {
      currentElement.classList.remove("boxActiveByPlayerTwo");
    } else {
      continue;
    }
  }

  // reset Winning boxes array
  winningBoxes = [];
  // reset player plays
  playerOnePlays = [];
  playerTwoPlays = [];
  // pick player to start next round
  whichPlayerStarts();
  // reset game status
  gameEnded = false;
  // reset draw status
  isDraw = false;
  //reset scores
  playerScores = {
    playerOne: 0,
    playerTwo: 0
  };
  document.getElementById("playerOneScore").innerHTML =
    playerScores["playerOne"];
  document.getElementById("playerTwoScore").innerHTML =
    playerScores["playerTwo"];

  document.getElementById("playAgainBtnContainer").style.opacity = 0;

  document.getElementById("landingPageContainer").style.transform =
    "translateX( 0px)";

  document.getElementById("playerIdentificationContainer").style.transform =
    "translateX( 0px)";
}

// shows the result when game ends
function displayWinnerMessage() {
  const width = getWidth();
  const height = getHeight();
  boxInteractionsOnLeaving();
  if (!isDraw) {
    document.getElementById(winningBoxes[0]).style.backgroundColor = "#a0e8b8";
    document.getElementById(winningBoxes[1]).style.backgroundColor = "#a0e8b8";
    document.getElementById(winningBoxes[2]).style.backgroundColor = "#a0e8b8";
  }

  document.getElementById("gameContainer").style.opacity = 0.5;
  document.getElementById("scoresContainer").style.opacity = 0.5;

  document.getElementById("msgLabelContainer").style.transform =
    "translateY(" + height + "px)";

  setTimeout(function() {
    document.getElementById("msgLabelContainer").style.transform =
      "translateY(" + 0 + "px)";
    document.getElementById("gameContainer").style.opacity = 1;
    document.getElementById("scoresContainer").style.opacity = 1;
    document.getElementById("playAgainBtnContainer").style.opacity = 1;
  }, 2050);

  if (isDraw) {
    document.getElementById("msgLabel").style.color = "#333";
    document.getElementById("msgLabel").innerHTML = "IT'S A DRAW!";
  } else if (playerOneTurn) {
    if (playerOneID === 0) {
      document.getElementById("msgLabel").style.color = "#db6c6c";
    } else {
      document.getElementById("msgLabel").style.color = "#6cc0db";
    }

    document.getElementById("msgLabel").innerHTML = "YOU WIN!";
  } else {
    if (playerOneID === 1) {
      document.getElementById("msgLabel").style.color = "#db6c6c";
    } else {
      document.getElementById("msgLabel").style.color = "#6cc0db";
    }
    document.getElementById("msgLabel").innerHTML = "PLAYER2 WINS!";
  }
}

// transitions on hovering over each box
function boxInteractionsOnEntering(currentBoxID) {
  switch (currentBoxID) {
    case "box1":
      document.getElementById("box1").style.borderRadius = "150px";
      document.getElementById("box2").style.transform = "translate(25px,25px)";
      document.getElementById("box3").style.transform = "translate(25px,25px)";
      document.getElementById("box4").style.transform = "translate(25px,25px)";
      document.getElementById("box5").style.transform = "translate(25px,25px)";
      document.getElementById("box6").style.transform = "translate(25px,25px)";
      document.getElementById("box7").style.transform = "translate(25px,25px)";
      document.getElementById("box8").style.transform = "translate(25px,25px)";
      document.getElementById("box9").style.transform = "translate(25px,25px)";
      break;
    case "box2":
      document.getElementById("box1").style.transform = "translate(-25px,0px)";
      document.getElementById("box2").style.borderRadius = "150px";
      document.getElementById("box3").style.transform = "translate(25px,0px)";
      document.getElementById("box4").style.transform = "translate(-25px,0px)";
      document.getElementById("box5").style.transform = "translate(0px,25px)";
      document.getElementById("box6").style.transform = "translate(25px,0px)";
      document.getElementById("box7").style.transform = "translate(-25px,0px)";
      document.getElementById("box8").style.transform = "translate(0px,25px)";
      document.getElementById("box9").style.transform = "translate(25px,0px)";
      break;
    case "box3":
      document.getElementById("box1").style.transform = "translate(-25px,25px)";
      document.getElementById("box2").style.transform = "translate(-25px,25px)";
      document.getElementById("box3").style.borderRadius = "150px";
      document.getElementById("box4").style.transform = "translate(-25px,25px)";
      document.getElementById("box5").style.transform = "translate(-25px,25px)";
      document.getElementById("box6").style.transform = "translate(-25px,25px)";
      document.getElementById("box7").style.transform = "translate(-25px,25px)";
      document.getElementById("box8").style.transform = "translate(-25px,25px)";
      document.getElementById("box9").style.transform = "translate(-25px,25px)";
      break;
    case "box4":
      document.getElementById("box1").style.transform = "translate(0px,-25px)";
      document.getElementById("box2").style.transform = "translate(0px,-25px)";
      document.getElementById("box3").style.transform = "translate(0px,-25px)";
      document.getElementById("box4").style.borderRadius = "150px";
      document.getElementById("box5").style.transform = "translate(25px,0px)";
      document.getElementById("box6").style.transform = "translate(25px,0px)";
      document.getElementById("box7").style.transform = "translate(0px,25px)";
      document.getElementById("box8").style.transform = "translate(0px,25px)";
      document.getElementById("box9").style.transform = "translate(0px,25px)";
      break;
    case "box5":
      document.getElementById("box1").style.transform = "translate(0px,-25px)";
      document.getElementById("box2").style.transform = "translate(0px,-25px)";
      document.getElementById("box3").style.transform = "translate(0px,-25px)";
      document.getElementById("box4").style.transform = "translate(-25px,0px)";
      document.getElementById("box5").style.borderRadius = "150px";
      document.getElementById("box6").style.transform = "translate(25px,0px)";
      document.getElementById("box7").style.transform = "translate(0px,25px)";
      document.getElementById("box8").style.transform = "translate(0px,25px)";
      document.getElementById("box9").style.transform = "translate(0px,25px)";
      break;
    case "box6":
      document.getElementById("box1").style.transform = "translate(0px,-25px)";
      document.getElementById("box2").style.transform = "translate(0px,-25px)";
      document.getElementById("box3").style.transform = "translate(0px,-25px)";
      document.getElementById("box4").style.transform = "translate(-25px,0px)";
      document.getElementById("box5").style.transform = "translate(-25px,0px)";
      document.getElementById("box6").style.borderRadius = "150px";
      document.getElementById("box7").style.transform = "translate(0px,25px)";
      document.getElementById("box8").style.transform = "translate(0px,25px)";
      document.getElementById("box9").style.transform = "translate(0px,25px)";
      break;
    case "box7":
      document.getElementById("box1").style.transform = "translate(25px,-25px)";
      document.getElementById("box2").style.transform = "translate(25px,-25px)";
      document.getElementById("box3").style.transform = "translate(25px,-25px)";
      document.getElementById("box4").style.transform = "translate(25px,-25px)";
      document.getElementById("box5").style.transform = "translate(25px,-25px)";
      document.getElementById("box6").style.transform = "translate(25px,-25px)";
      document.getElementById("box7").style.borderRadius = "150px";
      document.getElementById("box8").style.transform = "translate(25px,-25px)";
      document.getElementById("box9").style.transform = "translate(25px,-25px)";
      break;
    case "box8":
      document.getElementById("box1").style.transform = "translate(-25px,0px)";
      document.getElementById("box2").style.transform = "translate(0px,-25px)";
      document.getElementById("box3").style.transform = "translate(25px,0px)";
      document.getElementById("box4").style.transform = "translate(-25px,0px)";
      document.getElementById("box5").style.transform = "translate(0px,-25px)";
      document.getElementById("box6").style.transform = "translate(25px,0px)";
      document.getElementById("box7").style.transform = "translate(-25px,0px)";
      document.getElementById("box8").style.borderRadius = "150px";
      document.getElementById("box9").style.transform = "translate(25px,0px)";
      break;
    case "box9":
      document.getElementById("box1").style.transform =
        "translate(-25px,-25px)";
      document.getElementById("box2").style.transform =
        "translate(-25px,-25px)";
      document.getElementById("box3").style.transform =
        "translate(-25px,-25px)";
      document.getElementById("box4").style.transform =
        "translate(-25px,-25px)";
      document.getElementById("box5").style.transform =
        "translate(-25px,-25px)";
      document.getElementById("box6").style.transform =
        "translate(-25px,-25px)";
      document.getElementById("box7").style.transform =
        "translate(-25px,-25px)";
      document.getElementById("box8").style.transform =
        "translate(-25px,-25px)";
      document.getElementById("box9").style.borderRadius = "150px";
      break;
    default:
      break;
  }
}

// transitions on leaving over each box
function boxInteractionsOnLeaving() {
  for (let index = 0; index < box.length; index++) {
    document.getElementById(box[index]).style.transform = "translate(0,0)";
    document.getElementById(box[index]).style.borderRadius = "0px";
    document.getElementById(box[index]).style.backgroundColor = "#fff";
  }
}
// Set up on click functions for each box
for (let index = 0; index < box.length; index++) {
  document.getElementById(box[index]).onclick = function() {
    if (
      !document
        .getElementById(box[index])
        .classList.contains("boxActiveByPlayerOne") &&
      !document
        .getElementById(box[index])
        .classList.contains("boxActiveByPlayerTwo") &&
      !gameEnded
    ) {
      if (playerOneTurn) {
        this.classList.add("boxActiveByPlayerOne");
        playerOnePlays.push(this.id);
        this.innerHTML = document.getElementById("playerOneIdentity").innerHTML;

        if (calculateResult()) {
          playerScores["playerOne"] += 1;
          showScore();
          gameEnded = true;
          displayWinnerMessage();
        }
        playerOneTurn = false;
      } else {
        this.classList.add("boxActiveByPlayerTwo");
        playerTwoPlays.push(this.id);
        this.innerHTML = document.getElementById("playerTwoIdentity").innerHTML;
        if (calculateResult()) {
          playerScores["playerTwo"] += 1;
          showScore();
          gameEnded = true;
          displayWinnerMessage();
        }
        playerOneTurn = true;
      }
    }
  };

  document.getElementById(box[index]).addEventListener(
    "mouseenter",
    function(event) {
      if (!gameEnded) {
        this.style.backgroundColor = "#a0e8b8";
        this.style.cursor = "pointer";
        boxInteractionsOnEntering(this.id);
      } else {
        this.style.cursor = "default";
      }
    },
    false
  );

  document.getElementById(box[index]).addEventListener(
    "mouseleave",
    function(event) {
      if (!gameEnded) {
        this.style.backgroundColor = "#fff";
        boxInteractionsOnLeaving();
      }
    },
    false
  );
}

// button that resets game on click
document.getElementById("startBtnContainer").onclick = function() {
  document.getElementById("landingPageContainer").style.transform =
    "translateX(" + -1 * getWidth() + "px)";
  setTimeout(function() {
    setUpApp();
  }, 100);
};

// button that resets game on click
document.getElementById("playAgainBtnContainer").onclick = function() {
  startNextRound();
};

// button that resets game on click
document.getElementById("closeBtn").onclick = function() {
  resetGame();
};
