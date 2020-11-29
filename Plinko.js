class Plinko{
    constructor(x, y){
        var options = {
           isStatic : true
        }
        this.r = 10;
        this.body = Bodies.circle(x, y, this.r, options);  
        this.body.collisionFilter.group = 1;
        World.add(world, this.body);
    }
    
    display(){
        var pos = this.body.position;
        push();
        translate(0, 0);
        ellipseMode(RADIUS);
        fill("white");
        ellipse(pos.x, pos.y, this.r/2, this.r/2);
        pop();
    }
}