class Pig extends BaseClass{

    constructor(x,y){
        super(x,y,50,50);
        this.image = loadImage("sprites/enemy.png");
        this.Visibility = 255;
    
    }
    display(){
       //console.log(this.body.speed);
        if(this.body.speed<1){
            super.display();
        }
        else{
            World.remove(world , this.body);
            push();
                this.Visibility = this.Visibility - 2;
                tint( 255  ,  this.Visibility);
                image(this.image , this.body.position.x-30 , 
                this.body.position.y-20 , 50 , 50);
            pop();
        }   
    }
    score(){
        if(this.Visibility<0 && this.Visibility > -9999999){
            score = score + 5;
        }
    }
}