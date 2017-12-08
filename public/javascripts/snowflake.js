class Snowflake{
    constructor(_radius,_x,_y){
        this.r = _radius;
        this.xoff = 0;
        this.x = _x;
        this.y = _y;
        this.location = new p5.Vector(this.x,this.y)
        this.velocity = new p5.Vector(0,0);
        this.gravity = new p5.Vector(map(noise(this.xoff),0,1,0,0.0001),0.001)
    
    }
    render(){
        ellipse(this.location.x,this.location.y,this.r)
    }
    update(_volume){
        this.volume = _volume
        this.velocity.add(this.gravity);
        this.location.add(this.velocity);
        this.r = this.volume * 60       
        // this.gravity = p5.Vector.random2D()
        // this.gravity.mult(1.001)
        this.gravity.limit(1)
        this.xoff += 1
        
    }
        checkEdges() {
            
         if (this.location.y > height) {
              this.location.y = random(-100,-200);
            }
          }
    
}