let timer = 600;
let arr = [];
let back;
let numShifts = 0;
let img;
let nextButton;
let previousButton;
let end = 0;
let interval = 0;
let screenType = "WelcomeScreen";
let done = false;
let reversing = false;
let started = false;

function setup() {
  createCanvas(700, 600);
  arr[0] = new Token(60, 300, 5, 0, color(255, 0, 0), false, false);
  arr[1] = new Token(100, 300, 1, 1, color(255, 0, 0), false, false);
  arr[2] = new Token(140, 300, 4, 2, color(255, 0, 0), false, false);
  arr[3] = new Token(180, 300, 2, 3, color(255, 0, 0), false, false);
  arr[4] = new Token(220, 300, 3, 4, color(255, 0, 0), false, false);
  img = loadImage("Capture.png");
  back = loadImage("waterfall.gif");
  c1 = color(108, 17, 93); //lightSkyBlue
  c2 = color(224, 130, 154); //white

  nextButton = new nextB(500, 530, "NEXT", 150, 50, 35, 35);
  previousButton = new previousB(50, 530, "PREVIOUS", 150, 50, 2.5, 35);
}

function draw() {
  if (screenType == "WelcomeScreen") {
    welcomeScreen(100, 100);
  } else {
    for (let y = 0; y < height; y += 10) {
      n = map(y, 0, height, 0, 1);
      let newc = lerpColor(c1, c2, n);
      stroke(newc);
      fill(newc);
      rect(0, y, width, 10);
    }
  }

  if (screenType == "finale") {
    finale();
  }
  if (timer < 0) {
    timer = 600;
    screenType = "WelcomeScreen";
  }

  if (started) {
    nextButton.display();
    previousButton.display();
    for (let i = 0; i < arr.length; i++) {
      textFont("GOTHAM");
      textSize(20);
      fill(0);
      noStroke();
      text(arr[i].value, arr[i].x, arr[i].y);
      arr[i].display();
    }
    stroke(0);
    strokeWeight(1);
    fill(0);
    rect(335, 85, 330, 430, 5);
    image(img, 350, 100, 300, 400);
  }

  tempMove("sort1", "sorting", 1);
  shiftMove("sort2", "sort1", 0, 100, 60);
  finalMove("sort3", "sort2", 1, 60, 300, 100, 230);
  tempMove("sort4", "sort3", 2);
  shiftMove("sort5", "sort4", 0, 140, 100);
  finalMove("sort6", "sort5", 2, 100, 300, 140, 230);
  tempMove("sort7", "sort6", 3);
  shiftMove("sort8", "sort7", 0, 180, 140);
  shiftMove("sort9", "sort8", 2, 140, 100);
  finalMove("sort10", "sort9", 3, 100, 300, 180, 230);
  tempMove("sort11", "sort10", 4);
  shiftMove("sort12", "sort11", 0, 220, 180);
  shiftMove("sort13", "sort12", 2, 180, 140);
  finalMove("sort14", "sort13", 4, 140, 300, 220, 230);

  index(125, "sort1", 100, "sort2", "sort3");
  index(165, "sort4", 140, "sort5", "sort6");
  index(205, "sort7", 180, "sort8", "sort9", "sort10");
  index(245, "sort11", 220, "sort12", "sort13", "sort14");
}

function mouseClicked() {
  //NEXT BUTTON
  if (
    screenType == "sorting" &&
    mouseX > 500 &&
    mouseX < 650 &&
    mouseY > 530 &&
    mouseY < 580
  ) {
    screenType = "sort1";
    done = false;
  } else if (
    screenType == "sort1" &&
    mouseX > 500 &&
    mouseX < 650 &&
    mouseY > 530 &&
    mouseY < 580 &&
    done
  ) {
    screenType = "sort2";
    done = false;
  } else if (
    screenType == "sort2" &&
    mouseX > 500 &&
    mouseX < 650 &&
    mouseY > 530 &&
    mouseY < 580 &&
    done
  ) {
    screenType = "sort3";
    done = false;
  } else if (
    screenType == "sort3" &&
    mouseX > 500 &&
    mouseX < 650 &&
    mouseY > 530 &&
    mouseY < 580 &&
    done
  ) {
    screenType = "sort4";
    done = false;
  } else if (
    screenType == "sort4" &&
    mouseX > 500 &&
    mouseX < 650 &&
    mouseY > 530 &&
    mouseY < 580 &&
    done
  ) {
    screenType = "sort5";
    done = false;
  } else if (
    screenType == "sort5" &&
    mouseX > 500 &&
    mouseX < 650 &&
    mouseY > 530 &&
    mouseY < 580 &&
    done
  ) {
    screenType = "sort6";
    done = false;
  } else if (
    screenType == "sort6" &&
    mouseX > 500 &&
    mouseX < 650 &&
    mouseY > 530 &&
    mouseY < 580 &&
    done
  ) {
    screenType = "sort7";
    done = false;
  } else if (
    screenType == "sort7" &&
    mouseX > 500 &&
    mouseX < 650 &&
    mouseY > 530 &&
    mouseY < 580 &&
    done
  ) {
    screenType = "sort8";
    done = false;
  } else if (
    screenType == "sort8" &&
    mouseX > 500 &&
    mouseX < 650 &&
    mouseY > 530 &&
    mouseY < 580 &&
    done
  ) {
    screenType = "sort9";
    done = false;
  } else if (
    screenType == "sort9" &&
    mouseX > 500 &&
    mouseX < 650 &&
    mouseY > 530 &&
    mouseY < 580 &&
    done
  ) {
    screenType = "sort10";
    done = false;
  } else if (
    screenType == "sort10" &&
    mouseX > 500 &&
    mouseX < 650 &&
    mouseY > 530 &&
    mouseY < 580 &&
    done
  ) {
    screenType = "sort11";
    done = false;
  } else if (
    screenType == "sort11" &&
    mouseX > 500 &&
    mouseX < 650 &&
    mouseY > 530 &&
    mouseY < 580 &&
    done
  ) {
    screenType = "sort12";
    done = false;
  } else if (
    screenType == "sort12" &&
    mouseX > 500 &&
    mouseX < 650 &&
    mouseY > 530 &&
    mouseY < 580 &&
    done
  ) {
    screenType = "sort13";
    done = false;
  } else if (
    screenType == "sort13" &&
    mouseX > 500 &&
    mouseX < 650 &&
    mouseY > 530 &&
    mouseY < 580 &&
    done
  ) {
    screenType = "sort14";
    done = false;
  } else if (
    screenType == "sort14" &&
    mouseX > 500 &&
    mouseX < 650 &&
    mouseY > 530 &&
    mouseY < 580 &&
    done
  ) {
    screenType = "finale";
    done = false;
    started = false;
  }

  //PREVIOUS BUTTON
  if (
    screenType == "sort1" &&
    mouseX > 50 &&
    mouseX < 200 &&
    mouseY > 530 &&
    mouseY < 580 &&
    done
  ) {
    reversing = true;
    done = false;
  } else if (
    screenType == "sort2" &&
    mouseX > 50 &&
    mouseX < 200 &&
    mouseY > 530 &&
    mouseY < 580 &&
    done
  ) {
    reversing = true;
    done = false;
  } else if (
    screenType == "sort3" &&
    mouseX > 50 &&
    mouseX < 200 &&
    mouseY > 530 &&
    mouseY < 580 &&
    done
  ) {
    reversing = true;
    done = false;
  } else if (
    screenType == "sort4" &&
    mouseX > 50 &&
    mouseX < 200 &&
    mouseY > 530 &&
    mouseY < 580 &&
    done
  ) {
    reversing = true;
    done = false;
  } else if (
    screenType == "sort5" &&
    mouseX > 50 &&
    mouseX < 200 &&
    mouseY > 530 &&
    mouseY < 580 &&
    done
  ) {
    reversing = true;
    done = false;
  } else if (
    screenType == "sort6" &&
    mouseX > 50 &&
    mouseX < 200 &&
    mouseY > 530 &&
    mouseY < 580 &&
    done
  ) {
    reversing = true;
    done = false;
  } else if (
    screenType == "sort7" &&
    mouseX > 50 &&
    mouseX < 200 &&
    mouseY > 250 &&
    mouseY < 580 &&
    done
  ) {
    reversing = true;
    done = false;
  } else if (
    screenType == "sort8" &&
    mouseX > 50 &&
    mouseX < 200 &&
    mouseY > 250 &&
    mouseY < 580 &&
    done
  ) {
    reversing = true;
    done = false;
  } else if (
    screenType == "sort9" &&
    mouseX > 50 &&
    mouseX < 200 &&
    mouseY > 250 &&
    mouseY < 580 &&
    done
  ) {
    reversing = true;
    done = false;
  } else if (
    screenType == "sort10" &&
    mouseX > 50 &&
    mouseX < 200 &&
    mouseY > 250 &&
    mouseY < 580 &&
    done
  ) {
    reversing = true;
    done = false;
  } else if (
    screenType == "sort11" &&
    mouseX > 50 &&
    mouseX < 200 &&
    mouseY > 250 &&
    mouseY < 580 &&
    done
  ) {
    reversing = true;
    done = false;
  } else if (
    screenType == "sort12" &&
    mouseX > 50 &&
    mouseX < 200 &&
    mouseY > 250 &&
    mouseY < 580 &&
    done
  ) {
    reversing = true;
    done = false;
  } else if (
    screenType == "sort13" &&
    mouseX > 50 &&
    mouseX < 200 &&
    mouseY > 250 &&
    mouseY < 580 &&
    done
  ) {
    reversing = true;
    done = false;
  } else if (
    screenType == "sort14" &&
    mouseX > 50 &&
    mouseX < 200 &&
    mouseY > 250 &&
    mouseY < 580 &&
    done
  ) {
    reversing = true;
    done = false;
  }
}

function welcomeScreen(x, y) {
  image(back, x - 75, y - 75, 650, 550);
  fill(0);
  noStroke();
  textFont("GOTHAM");
  textSize(50);
  strokeWeight(2);
  text("INSERTION", x - 30, y + 120);
  text("SORT", x - 30, y + 200);
  textSize(20);
  text("Moeez Ishaq", x - 30, y + 290);

  if (
    mouseX > x - 30 &&
    mouseX < x + 120 &&
    mouseY > y + 350 &&
    mouseY < y + 400
  ) {
    fill(133, 13, 85);
    stroke(0);
    rect(x - 30, y + 350, 150, 50, 2);
    fill(255);
    textSize(30);
    text("START", x, y + 385);
  } else {
    noFill();
    stroke(0);
    rect(x - 30, y + 350, 150, 50, 2);
    fill(252, 3, 132);
    textSize(30);
    text("START", x, y + 385);
  }
}

function mousePressed() {
  if (
    screenType == "WelcomeScreen" &&
    mouseX > 70 &&
    mouseX < 220 &&
    mouseY > 450 &&
    mouseY < 500
  ) {
    screenType = "sorting";
    started = true;
  }
}

function finale() {
  background(0);
  fill(255);
  stroke(255);
  strokeWeight(1);
  textSize(50);
  text("SORTED!", 230, 300);
  timer--;
  textSize(15);
  text("Going back in: " + round(timer / 60), 275, 350);
  arr[0] = new Token(60, 300, 5, 0, color(255, 0, 0), false, false);
  arr[1] = new Token(100, 300, 1, 1, color(255, 0, 0), false, false);
  arr[2] = new Token(140, 300, 4, 2, color(255, 0, 0), false, false);
  arr[3] = new Token(180, 300, 2, 3, color(255, 0, 0), false, false);
  arr[4] = new Token(220, 300, 3, 4, color(255, 0, 0), false, false);
  done = false;
  reversing = false;
  started = false;
}

function index(x, screen1, positionEnd, screen2, screen3, screen4) {
  if (
    screenType == screen1 ||
    screenType == screen2 ||
    screenType == screen3 ||
    screenType == screen4
  ) {
    stroke(0);
    strokeWeight(1);
    fill(0);
    textSize(15);
    text("end", positionEnd - 5, 330);
    text("Sorted", positionEnd - 60, 400);
    text("Unsorted", positionEnd + 58, 400);
    strokeWeight(3);
    stroke(130, 216, 224);
    line(x, 200, x, 400);
  }
}

function tempMove(beforeScreen, afterScreen, index) {
  if (screenType == beforeScreen) {
    if (!reversing) {
      arr[index].tempSort();
    } else if (reversing) {
      arr[index].reverseTemp(afterScreen);
    }
    stroke(255, 0, 0);
    strokeWeight(2);
    noFill();
    rect(370, 307, 150, 20, 5);
  }
}

function shiftMove(beforeScreen, afterScreen, index, forwardX, backX) {
  if (screenType == beforeScreen) {
    if (!reversing) {
      arr[index].shiftSort(forwardX);
    } else if (reversing) {
      arr[index].reverseShift(backX, afterScreen);
    }

    stroke(255, 0, 0);
    strokeWeight(2);
    noFill();
    rect(370, 344, 200, 75, 5);
  }
}

function finalMove(beforeScreen, afterScreen, index, x1, y1, x2, y2) {
  if (screenType == beforeScreen) {
    if (!reversing) {
      arr[index].finalSort(x1, y1);
    }
    if (reversing) {
      arr[index].reverseFinal(x2, y2, afterScreen);
    }
    stroke(255, 0, 0);
    strokeWeight(2);
    noFill();
    rect(370, 417, 150, 20, 5);
  }
}

class Token {
  constructor(x, y, value, index, c, selected, sorted) {
    this.x = x;
    this.y = y;
    this.value = value;
    this.index = index;
    this.c = c;
    this.selected = selected;
    this.sorted = sorted;
  }

  display() {
    noFill();
    stroke(0);
    strokeWeight(3);
    rect(this.x - 15, this.y - 25, 40, 40);

    if (this.selected) {
      stroke(this.c);
      strokeWeight(3);
      noFill();
      rect(this.x - 15, this.y - 25, 40, 40);
    } else if (!this.selected) {
      noStroke();
      noFill();
      rect(this.x - 15, this.y - 25, 40, 40);
    }
  }

  tempSort() {
    this.selected = true;
    this.y--;
    if (this.y < 230) {
      this.y = 230;
    }
    if (this.y == 230) {
      done = true;
    }
    stroke(0);
    strokeWeight(1);
    fill(0);
    textSize(15);
    text("item:", this.x - 53, 230);
    fill(0);
    stroke(0);
    strokeWeight(1);
    textSize(15);
    text("i", this.x - 38, 270);
  }

  reverseTemp(screen) {
    this.selected = false;
    this.y++;
    if (this.y > 300) {
      this.y = 300;
    }
    if (this.y == 300) {
      done = true;
      reversing = false;
      screenType = screen;
    }
  }

  shiftSort(stop) {
    this.x++;
    if (this.x > stop) {
      this.x = stop;
    }
    if (this.x == stop) {
      done = true;
    }
    this.sorted = true;
    fill(0);
    stroke(0);
    strokeWeight(1);
    textSize(15);
    text("i", this.x, 270);
  }

  reverseShift(start, screen) {
    this.x--;
    if (this.x < start) {
      this.x = start;
    }
    if (this.x == start) {
      done = true;
      reversing = false;
      screenType = screen;
    }
    this.sorted = false;
    fill(0);
    stroke(0);
    strokeWeight(1);
    textSize(15);
    text("i", this.x, 270);
  }

  finalSort(targetX, targetY) {
    this.x--;
    if (this.x < targetX) {
      this.x = targetX;
    }
    if (this.x == targetX) {
      this.y++;
    }
    if (this.y > targetY) {
      this.y = targetY;
    }
    if (this.x == targetX && this.y == targetY) {
      this.selected = false;
      this.sorted = true;
      done = true;
    }
  }

  reverseFinal(targetX, targetY, screen) {
    this.y--;
    if (this.y < targetY) {
      this.y = targetY;
    }
    if (this.y == targetY) {
      this.x++;
    }
    if (this.x > targetX) {
      this.x = targetX;
    }
    if (this.x == targetX && this.y == targetY) {
      this.selected = true;
      this.sorted = false;
      done = true;
      reversing = false;
      screenType = screen;
    }
  }
}

class Button {
  constructor(x, y, text, sizeX, sizeY) {
    this.x = x;
    this.y = y;
    this.text = text;
    this.sizeX = sizeX;
    this.sizeY = sizeY;
  }
}

class nextB extends Button {
  constructor(x, y, text, sizeX, sizeY, incrementsX, incrementsY) {
    super(x, y, text, sizeX, sizeY);
    this.incrementsX = incrementsX;
    this.incrementsY = incrementsY;
  }

  display() {
    if (mouseX > 500 && mouseX < 650 && mouseY > 530 && mouseY < 580) {
      stroke(0);
      strokeWeight(2);
      fill(4, 145, 23);
      rect(this.x, this.y, this.sizeX, this.sizeY, 5);
    } else {
      stroke(0);
      strokeWeight(2);
      fill(34, 87, 34);
      rect(this.x, this.y, this.sizeX, this.sizeY, 5);
    }
    fill(0);
    stroke(0);
    textSize(30);
    text(this.text, this.x + this.incrementsX, this.y + this.incrementsY);
  }
}

class previousB extends Button {
  constructor(x, y, text, sizeX, sizeY, incrementsX, incrementsY) {
    super(x, y, text, sizeX, sizeY);
    this.incrementsX = incrementsX;
    this.incrementsY = incrementsY;
  }

  display() {
    if (mouseX > 50 && mouseX < 200 && mouseY > 530 && mouseY < 580) {
      fill(211, 0, 0);
      rect(this.x, this.y, this.sizeX, this.sizeY, 5);
    } else {
      stroke(0);
      fill(175, 0, 0);
      rect(this.x, this.y, this.sizeX, this.sizeY, 5);
    }
    fill(0);
    stroke(0);
    textSize(30);
    text(this.text, this.x + this.incrementsX, this.y + this.incrementsY);
  }
}
