//CREATED BY AADI GOLECHA ON 26TH ON JULY
//CLASS FOR COMPUTER ARCHER

class ComputerArcher 
{
    constructor(x, y, width, height) {
      //making the comp bow still using isStatic
      const options = {
        isStatic: true
      };
  
      //created the bow using image and added it to the world
      this.body = Matter.Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("./assets/computerArcher.png");
  
      World.add(world, this.body);
  
      //seting the angle for the bow 
      Matter.Body.setAngle(this.body, PI / 2); // -90 degree
    }
  
    //displaying the bow 
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
  