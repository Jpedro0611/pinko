 class Particles {
    constructor(x,y,r){

        this.x=x;
        this.y=y;
        this.r=r;

       // this.color = color(random(0,255), random(0,255),random(0,255))
        World.add(world,this.body);


    }
    display(){

        push();
        // translate(pos.x, pos.y);
        // rotate(angle);
        //imageMode(CENTER);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();


    }

 }