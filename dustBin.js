class dustBin {
    constructor(x,y,width,height) {
      var options = {
          density:1.0,
          restitution:0
      }
      this.image=loadImage("dustbingreen.png");
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push ()
      translate(pos.x,pos.y);
      imageMode(CENTER);
      fill("purple");
      image(this.image,0, 0, this.width, this.height);
      pop ()
    }
  };