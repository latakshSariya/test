class Ground {

    constructor(x,y,width,height){
        var ground = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,width , height,ground);
        this.width = width;
        this.height = height;
        World.add(world,this.body)
    }
    display(){
        push();
            translate(this.body.position.x , this.body.position.y);
            rotate(this.body.angle);
            fill("brown")
            rectMode(CENTER);
            rect(0,0 , this.width , this.height)
           
        pop();

    }

}