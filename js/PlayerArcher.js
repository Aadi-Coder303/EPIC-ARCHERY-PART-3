//CREATED BY AADI GOLECHA ON 26TH ON JULY
//CLASS FOR PLAYER ARCHER

class PlayerArcher {
  //Making the players static(still)
    constructor(x, y, width, height) 
    {
      const options = {
        isStatic: true
      };
  
      //Created the player with it's image and added it to the world
      this.body = Matter.Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("./assets/playerArcher.png");
  
      World.add(world, this.body);
  
      //Setting in perfect angle for the  bow
      Matter.Body.setAngle(this.body, -PI / 2); // -90 degree
    }
  
    display() {
      var pos = this.body.position;
      var angle = this.body.angle;
      
      //rotating the one its place using arrow keys
      if (keyIsDown(DOWN_ARROW) && angle < -1.2) {
        angle += 0.01;
        Matter.Body.setAngle(this.body, angle);
      }
  
      if (keyIsDown(UP_ARROW) && angle > -1.9) {
        angle -= 0.01;
        Matter.Body.setAngle(this.body, angle);
      }
      
      //Displaying the bow
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
  }
  