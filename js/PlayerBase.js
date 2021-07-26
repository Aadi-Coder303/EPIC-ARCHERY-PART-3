//CREATED BY AADI GOLECHA ON 26TH ON JULY
//CLASS FOR PLAYER BASE

class PlayerBase 
{
  constructor(x, y, width, height) {
//Created a still base with it's image and added it to the world
    var options = 
    {
      isStatic: true
    };

    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image = loadImage("./assets/base1.png");

    World.add(world, this.body);
  }

  //Displaying the base image
  display() {
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
