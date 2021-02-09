class Ball {

    constructor(x,y){
    var Options={
   
        'restitution':0.8,
        'friction':0,
        'density':7.8,
        }
    
        this.body=Bodies.circle(x,y,80,Options);
        World.add(world,this.body);
    
       
    }
    
    display(){
    push();
   
    fill(300,0,300);
   ellipseMode(RADIUS);
    ellipse(this.body.position.x,this.body.position.y,40,40);
    pop();
    
    }
    
    };