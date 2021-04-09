class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.image2 = loadImage("sprites/smoke.png")
    this.trajectory = []
  }

  display() {
    super.display();
    var pos = [this.body.position.x,this.body.position.y];
    if(this.body.velocity.x>3&&this.body.position.x>125){
      this.trajectory.push(pos);
    }
    //console.log(this.trajectory);
    if(gameState === "Deployed"){
      for(var i = 0;i<this.trajectory.length;i++){
        image(this.image2,this.trajectory[i][0],this.trajectory[i][1],10,10);
      }
    }
    if(gameState==="Sling"){
      for(var i = 0;i<this.trajectory.length;i++){
        this.trajectory.pop();
      }
    }
  }
}
