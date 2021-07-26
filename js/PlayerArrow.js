//CREATED BY AADI GOLECHA ON 26TH ON JULY
//CLASS FOR PLAYER ARROW

class PlayerArrow {

    constructor(x, y, width, height) 
    {
      var options = 
      {
        //Giving the required properties to the arrow
        restitution: 0.8,
        friction: 1.0,
        density: 1.0,
        isStatic: true
      };

      //Created the bow with it's image and added it to the world
      this.width = width;
      this.height = height;
      this.body = Bodies.rectangle(x, y, this.width, this.height, options);
      this.image = loadImage("./assets/arrow.png");
      
      World.add(world, this.body);
    }

    //Should function to show that the perfect velocity
    shoot() 
    {
      var velocity = p5.Vector.fromAngle(playerArcher.body.angle + 1);
      velocity.mult(20);
      Matter.Body.setStatic(this.body, false);
      Matter.Body.setVelocity(this.body, { x: velocity.x, y: velocity.y });
    }

    //Displaying the arrow
    display() 
    {
        var pos = this.body.position;
    
        push();
        translate(pos.x, pos.y);
        rotate(playerArcher.body.angle+1.5);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();

    
    
    }
}