class slingshot{
    constructor(bodyA , pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.05,
            length:40
          }
           this.body = Constraint.create(options);
           this.pointB = pointB 
           this.image1 = loadImage("sprites/sling1.png");
           this.image2 = loadImage("sprites/sling2.png");
           this.image3 = loadImage("sprites/sling3.png");
           World.add(world ,this.body);  

                  
      }
        
        fly(){
            this.body.bodyA = null; 
        }

     display(){

        strokeWeight(10);
        image(this.image1 , 200,70);
        image(this.image2 , 169,60);
        stroke(67,31,12);
        if (this.body.bodyA !=null){
            var point1 = this.body.bodyA.position
            var point2 = this.pointB
            push()
            if(point1.x < 220 ){
                line(point1.x-10 , point1.y , point2.x-20  , point2.y+30);
                line(point1.x+25 , point1.y , point2.x+30 , point2.y+40);
                image(this.image3 , point1.x-20, point1.y-10 , 10 ,20)
            }
            else{
                line(point1.x+20 ,point1.y , point2.x-20, point2.y+30);
                line(point1.x+20 , point1.y , point2.x+30 , point2.y+40);
                image(this.image3 , point1.x+20 , point1.y-10 , 10 , 20)
            }
            pop()
        } 
    }
}