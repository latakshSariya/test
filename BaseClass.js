class BaseClass{
    constructor(x,y,width,height,angle){
        var body_options={
            friction: 0.5,
            density:1.2,
            restitution: 0.8
        }
        this.body = Bodies.rectangle(x,y,width,height,body_options);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/base.png");
        World.add(world,this.body);
    }

    display(){
        push();
            translate(this.body.position.x , this.body.position.y);
            rotate(this.body.angle);
            imageMode(CENTER);
            image(this.image,0,0,this.width,this.height);
        pop();

    }


}