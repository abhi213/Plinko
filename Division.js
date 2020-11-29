class Division {
   constructor(x, y, w, h){
       var options = {
          isStatic:true
       }
       this.body = Bodies.rectangle(x, y, w, h, options);
       this.w = w;
       this.h = h;
       this.body.collisionFilter.group = 1;
       World.add(world, this.body); 
   } 

   display(){
       var pos = this.body.position;
       rectMode(CENTER);
       fill("white");
       rect(pos.x, pos.y, this.w, this.h);
   }
}