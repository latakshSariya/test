class Bird extends BaseClass {
    constructor(x , y){
        super(x,y,50,50);
        this.image = loadImage("sprites/bird.png");
        this.image2 = loadImage("sprites/smoke.png");
        this.path = [];
        
    
    }
    display(){
       
        var pos = this.body.position
        super.display();

        //console.log(this.body.velocity.x);
        if(this.body.velocity.x > 9 && this.body.position.x > 200){
            var path2 = [pos.x , pos.y];    
            this.path.push(path2);
        }
        for(var i = 0 ; i < this.path.length ; i ++){
            image(this.image2 , this.path[i][0] , this.path [i][1] , 10, 10);
        }
    }
        
}