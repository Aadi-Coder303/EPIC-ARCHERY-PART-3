//CREATED BY AADI GOLECHA ON 26TH ON JULY
//CLASS FOR COMPUTER PLAYER

class Computer {
  constructor(x, y, width, height) {

    //making the comp player still
    var options = {
      isStatic: true
    };

    //created the comp player
    this.body = Bodies.rectangle(x, y, width, height, options);

    this.width = width;
    this.height = height;

    //added the image
    this.image = loadImage("./assets/player.png");

    //added it to the world
    World.add(world, this.body);
  }

  //function to display the player using image
   display() 
   {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}
