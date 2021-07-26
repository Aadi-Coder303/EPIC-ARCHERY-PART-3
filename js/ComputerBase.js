//CREATED BY AADI GOLECHA ON 26TH ON JULY
//CLASS FOR COMPUTER BASE

class ComputerBase {

  //Making the base is still in the air
  constructor(x, y, width, height) {
    var options = {
      isStatic: true
    };

   // Created the base with it's image and added it to the world
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image = loadImage("./assets/base2.png");

    World.add(world, this.body);
  }

  //Displaying the base
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
