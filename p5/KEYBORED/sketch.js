/* Using the Keyboard
Courtney Edwards
2018/09/01 */

// Position and size variables for the blackboard
var posX = 200;
var posY = 200;
var bbWidth = 200;

// Position variables for letters
var letterX;
var letterY;

// Array to hold the letters
var letters=['T', 'e', 's', 't'];


function setup() {
  var myCanvas = createCanvas(640, 480);
  myCanvas.parent('UseKeys');  // link to HTML div with same id
}

function draw() {
  background(155);  // grey background

  // draw a blackboard for writing on
  stroke(186, 145, 20);
  strokeWeight(15);
  fill(0,0,0);
  rect(posX, posY, bbWidth, bbWidth/2);

  // write white characters on the blackboard
  for (var i=0; i < letters.length; i++) {
	  noStroke();
	  fill(255);
	  letterX = (i*15) % (bbWidth - 40) + posX + 20;
	  letterY = posY + 20 + 15 * floor((i*15) / (bbWidth - 40));
	  text(letters[i], letterX , letterY);
  }
}

function keyPressed() {
	// When a key is pressed, check for arrow keys and move the blackboard
	if (keyCode == RIGHT_ARROW) {
		posX += 4;
	}
	else if (keyCode == LEFT_ARROW) {
		posX -=4;
	}
	else if (keyCode == UP_ARROW) {
		posY -=4;
	}
	else if (keyCode == DOWN_ARROW) {
		posY +=4;
	}
	// don't put arrow key symbols into the letters array
	else {letters.push(key);}
	return false;
}
