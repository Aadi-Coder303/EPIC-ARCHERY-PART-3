//CREATED BY AADI GOLECHA ON 26TH ON JULY
//CLASS FOR PLAYER

class Player {

  //Making the player still on the base
  constructor(x, y, width, height) {
    var options = {
      isStatic: true
    };

    //Created the base and added to the world
    this.body = Bodies.rectangle(x, y, width, height, options);

    this.width = width;
    this.height = height;
    this.image = loadImage("./assets/player.png");

    World.add(world, this.body);
  }

 
  display() {
    //Displaying the player with its image
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
