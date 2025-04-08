let gridSize = 10;
let cellSize = 40;

let playerGrid = [];
let computerGrid = [];

let playerChars = [];
let computerChars = [];

let movedThisTurn = [];
let selectedCharIndex = null;

let turn = "player";
let movePhase = true;

let hitMessage = "";
let hitMessageTimer = 0;
let explosion = null;

let turnLog = [];
let computerMemory = {
  hitStack: [],
  potentialTargets: []
};

let lastPlayerAttack = null;
let lastAttackResult = null;

let buttonTransparency = 0;
let gameEnded = false;

function setup() {
  createCanvas(gridSize * cellSize * 2 + 40, gridSize * cellSize + 240);
  initGrids();
  initCharacters();
}

function initGrids() {
  playerGrid = Array.from({ length: gridSize }, () => Array(gridSize).fill(0));
  computerGrid = Array.from({ length: gridSize }, () => Array(gridSize).fill(0));
}

function initCharacters() {
  playerChars = getRandomPositions(3, playerGrid).map(pos => ({ ...pos, alive: true }));
  computerChars = getRandomPositions(3, computerGrid).map(pos => ({ ...pos, alive: true }));
  movedThisTurn = playerChars.map(c => !c.alive);
}

function getRandomPositions(count, grid) {
  const positions = [];
  while (positions.length < count) {
    const x = floor(random(gridSize));
    const y = floor(random(gridSize));
    if (!positions.some(p => p.x === x && p.y === y) && grid[x][y] === 0) {
      positions.push({ x, y });
    }
  }
  return positions;
}

function draw() {
  background(240);

  drawHitMessage();
  drawInfo();
  drawGrid(playerGrid, 0, 40, playerChars, false, true);
  drawGrid(computerGrid, gridSize * cellSize + 40, 40, [], true);
	drawInstructions();
	drawHiddenButton();

  if (explosion) {
    fill(248, 176, 66, explosion.opacity);
    ellipse(explosion.x, explosion.y, 30);
    explosion.opacity -= 5;
    if (explosion.opacity <= 0) explosion = null;
  }

  drawTurnLog();

  if (checkGameOver()) {
    textSize(32);
    fill(0);
    textAlign(CENTER, TOP);
    text(getWinner() + " wins!", width / 2, 5);
    noLoop();
  }
	
	if (gameEnded) {
    textSize(32);
    
    fill(0);
    noStroke();
    rect(width / 2 - 375, height / 2 - 140, 750, 125);

    fill(255);
    textAlign(CENTER, TOP);
    
    text("Everyone agreed to the terms.", width / 2, height / 2 - 120);
    text("What if peace were evident from the start?", width / 2, height / 2 - 70);
	}
}

function drawHitMessage() {
  if (hitMessageTimer > 0) {
    fill(255, 0, 0);
    textSize(20);
    textAlign(CENTER);
    text(hitMessage, width / 2, 20);
    hitMessageTimer--;
  }
}

function drawInstructions() {
  fill(220);
  noStroke();
  
  fill(0);
  textSize(16);
  textAlign(LEFT, TOP);
  text("Battleship on Foot instructions", 50, gridSize * cellSize + 55);
  text("1. Move your civilians by clicking one and then clicking an adjacent cell.", 50, gridSize * cellSize + 75);
  text("2. Attack enemy civilians by selecting a square on the right-side grid to bombard.", 50, gridSize * cellSize + 95);
	text("2a. Near miss means one square away; activity nearby means diagonally nearby.", 50, gridSize * cellSize + 115);
  text("3. The game ends when all civilians from one side are eliminated.", 50, gridSize * cellSize + 135);
}

function drawInfo() {
  fill(0);
  textSize(16);
  textAlign(CENTER, BOTTOM);
  text("Player: " + playerChars.filter(c => c.alive).length + " alive", cellSize * gridSize / 2, 30);
  text("Computer: " + computerChars.filter(c => c.alive).length + " alive", cellSize * gridSize + 40 + cellSize * gridSize / 2, 30);
}

function drawHiddenButton() {
  fill(0, 150);
  noStroke();

  fill(0, buttonTransparency);
  textSize(12);
  textAlign(LEFT, CENTER);
  text("Click me to sue for peace", 50, gridSize * cellSize + 162.5);
}

function drawGrid(grid, offsetX, offsetY, characters, hide = false, highlightPlayer = false) {
  for (let y = 0; y < gridSize; y++) {
    for (let x = 0; x < gridSize; x++) {
      stroke(0);
      if (offsetX > width / 2) {
        if (lastPlayerAttack && lastPlayerAttack.x === x && lastPlayerAttack.y === y) {
          if (lastAttackResult === "hit") {
            fill("black");
          } else if (lastAttackResult === "near") {
            fill("#9dbdba");
          } else if (lastAttackResult === "diag") {
            fill("#93aec1");
          } else {
            fill("#888");
          }
        } else {
          fill(grid[x][y] === 1 ? "black" : "white");
        }
      } else {
        fill(grid[x][y] === 1 ? "black" : "white");
      }
      rect(offsetX + x * cellSize, offsetY + y * cellSize, cellSize, cellSize);
    }
  }

  characters.forEach((c, index) => {
    if (!c.alive) return;
    let px = offsetX + c.x * cellSize;
    let py = offsetY + c.y * cellSize;

    if (highlightPlayer) {
      if (selectedCharIndex === index) {
        strokeWeight(3);
        stroke(0, 255, 0);
      } else {
        strokeWeight(1);
        stroke(0);
      }
    }

    fill(highlightPlayer && movedThisTurn[index] ? 200 : "#ec6a52");
    rect(px + 5, py + 5, cellSize - 10, cellSize - 10);

    if (highlightPlayer) strokeWeight(1);
  });
}

function drawTurnLog() {
  fill(0);
  textSize(12);
  textAlign(LEFT);
  text("Turn Log:", 10, height - 60);
  for (let i = 0; i < turnLog.length && i < 4; i++) {
    text(turnLog[turnLog.length - 1 - i], 10, height - 45 + i * 14);
  }
}

function mousePressed() {
  let buttonX = 50;
  let buttonY = gridSize * cellSize + 150;
  let buttonWidth = 200;
  let buttonHeight = 30;
  
  if (mouseX >= buttonX && mouseX <= buttonX + buttonWidth &&
      mouseY >= buttonY && mouseY <= buttonY + buttonHeight) {
    gameEnded = true;
    noLoop();
    return;
  }
	
  if (turn !== "player") return;

  let gridX = floor(mouseX / cellSize);
  let gridY = floor((mouseY - 40) / cellSize);
  if (gridY < 0 || gridY >= gridSize) return;

  if (mouseX < gridSize * cellSize) {
    for (let i = 0; i < playerChars.length; i++) {
      let c = playerChars[i];
      if (c.alive && c.x === gridX && c.y === gridY) {
        selectedCharIndex = (selectedCharIndex === i) ? null : i;
        return;
      }
    }

    if (selectedCharIndex !== null) {
      let c = playerChars[selectedCharIndex];
      if (!movedThisTurn[selectedCharIndex] &&
          isAdjacent(c.x, c.y, gridX, gridY) &&
          playerGrid[gridX][gridY] === 0 &&
          !isOccupied(gridX, gridY, playerChars)) {
        c.x = gridX;
        c.y = gridY;
        movedThisTurn[selectedCharIndex] = true;
        selectedCharIndex = null;
        if (playerChars.every((c, i) => !c.alive || movedThisTurn[i])) movePhase = false;
      }
    }

  } else {
    if (movePhase) return;
    let cx = gridX - gridSize - 1;
    if (cx < 0 || cx >= gridSize) return;

    if (computerGrid[cx][gridY] === 0) {
      computerGrid[cx][gridY] = 1;

      lastPlayerAttack = { x: cx, y: gridY };

      let hit = false;
      let nearMiss = false;
      let diagMiss = false;

      for (let c of computerChars) {
        if (c.alive) {
          if (c.x === cx && c.y === gridY) {
            c.alive = false;
            hit = true;
          } else if (isAdjacent(c.x, c.y, cx, gridY)) {
            nearMiss = true;
          } else if (isDiagonal(c.x, c.y, cx, gridY)) {
            diagMiss = true;
          }
        }
      }

      if (hit) {
        hitMessage = "You hit one!";
        lastAttackResult = "hit";
        computerMemory.hitStack = [{ x: cx, y: gridY }];
        computerMemory.potentialTargets = [];
      } else if (nearMiss) {
        hitMessage = "Near miss!";
        lastAttackResult = "near";
        computerMemory.hitStack = [{ x: cx, y: gridY }];
      } else if (diagMiss) {
        hitMessage = "Activity nearby!";
        lastAttackResult = "diag";
        computerMemory.hitStack = [{ x: cx, y: gridY }];
      } else {
        hitMessage = "Miss!";
        lastAttackResult = "miss";
        computerMemory.hitStack = [];
      }

      hitMessageTimer = 60;
      explosion = { x: mouseX, y: mouseY, opacity: 255 };
      turnLog.push(`Player attacks (${cx}, ${gridY}) - ${hitMessage}`);
      endTurn();
    }
  }
}

function isAdjacent(x1, y1, x2, y2) {
  return abs(x1 - x2) + abs(y1 - y2) === 1;
}

function isDiagonal(x1, y1, x2, y2) {
  return abs(x1 - x2) === 1 && abs(y1 - y2) === 1;
}

function isOccupied(x, y, chars) {
  return chars.some(c => c.alive && c.x === x && c.y === y);
}

function endTurn() {
  turn = "computer";
  selectedCharIndex = null;
  movedThisTurn = playerChars.map(c => !c.alive);
  movePhase = true;
	buttonTransparency = min(buttonTransparency + 1, 100);
  setTimeout(computerTurn, 700);
}

function isValidAttack(x, y) {
  return x >= 0 && x < gridSize && y >= 0 && y < gridSize && playerGrid[x][y] === 0;
}

function computerTurn() {
  for (let c of computerChars) {
    if (!c.alive) continue;

    let dirs = shuffle([
      { dx: 1, dy: 0 },
      { dx: -1, dy: 0 },
      { dx: 0, dy: 1 },
      { dx: 0, dy: -1 }
    ]);

    let bestMove = null;
    let maxDistance = -1;

    for (let dir of dirs) {
      let nx = c.x + dir.dx;
      let ny = c.y + dir.dy;
      if (
        nx >= 0 && nx < gridSize &&
        ny >= 0 && ny < gridSize &&
        computerGrid[nx][ny] === 0 &&
        !isOccupied(nx, ny, computerChars)
      ) {
        let distance = 0;
        for (let p of playerChars) {
          if (p.alive) distance += dist(nx, ny, p.x, p.y);
        }
        if (distance > maxDistance) {
          maxDistance = distance;
          bestMove = { x: nx, y: ny };
        }
      }
    }

    if (bestMove) {
      c.x = bestMove.x;
      c.y = bestMove.y;
    }
  }

  let gx, gy;

  if (computerMemory.hitStack.length > 0) {
    let { x, y } = computerMemory.hitStack[0];
    let directions = shuffle([
      { x: x + 1, y },
      { x: x - 1, y },
      { x, y: y + 1 },
      { x, y: y - 1 }
    ]);
    for (let d of directions) {
      if (isValidAttack(d.x, d.y)) {
        gx = d.x;
        gy = d.y;
        break;
      }
    }
  }

  while ((gx === undefined || gy === undefined) && computerMemory.potentialTargets.length > 0) {
    let next = computerMemory.potentialTargets.shift();
    if (isValidAttack(next.x, next.y)) {
      gx = next.x;
      gy = next.y;
    }
  }

  if (gx === undefined || gy === undefined) {
    let available = [];
    for (let x = 0; x < gridSize; x++) {
      for (let y = 0; y < gridSize; y++) {
        if (playerGrid[x][y] === 0) {
          available.push({ x, y });
        }
      }
    }
    if (available.length > 0) {
      let choice = random(available);
      gx = choice.x;
      gy = choice.y;
    } else {
      gx = 0;
      gy = 0;
    }
  }

  playerGrid[gx][gy] = 1;

  let hit = false;
  let nearMiss = false;
  let diagMiss = false;

  for (let c of playerChars) {
    if (c.alive) {
      if (c.x === gx && c.y === gy) {
        c.alive = false;
        hit = true;
      } else if (isAdjacent(c.x, c.y, gx, gy)) {
        nearMiss = true;
      } else if (isDiagonal(c.x, c.y, gx, gy)) {
        diagMiss = true;
      }
    }
  }

  if (hit) {
    computerMemory.hitStack = [{ x: gx, y: gy }];
    computerMemory.potentialTargets = [];
  } else {
    computerMemory.hitStack = [];
    if (nearMiss || diagMiss) {
      let nearby = [];
      for (let dx = -1; dx <= 1; dx++) {
        for (let dy = -1; dy <= 1; dy++) {
          if (dx === 0 && dy === 0) continue;
          let nx = gx + dx;
          let ny = gy + dy;
          if (isValidAttack(nx, ny)) {
            nearby.push({ x: nx, y: ny });
          }
        }
      }
      computerMemory.potentialTargets.push(...shuffle(nearby));
    }
  }

  let resultText = hit ? "Hit!" : nearMiss ? "Near miss" : diagMiss ? "Activity nearby" : "Miss";
  turnLog.push(`Computer attacks (${gx}, ${gy}) - ${resultText}`);
  turn = "player";
}

function checkGameOver() {
  return playerChars.every(c => !c.alive) || computerChars.every(c => !c.alive);
}

function getWinner() {
  const playerAlive = playerChars.filter(c => c.alive).length;
  const computerAlive = computerChars.filter(c => c.alive).length;
  if (playerAlive === 0 && computerAlive === 0) return "Draw";
  return playerAlive > 0 ? "Player" : "Computer";
}
