class LOG extends BaseClass{
    constructor(x,y , width , angle){
        super(x,y,width,25,angle);
        Matter.Body.setAngle(this.body , angle);
        this.image = loadImage("sprites/wood2.png")
    }
}
