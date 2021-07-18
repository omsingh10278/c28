class Slingshot{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            length:10,
            stiffness:0.34
        }
            this.slingshot =  Constraint.create(options);
            this.pointB = pointB
            World.add(world,this.slingshot)

    }
     display(){
    var pointA = this.slingshot.bodyA.position
     var pointB = this.pointB
     line(pointA.x,pointA.y,pointB.x,pointB.y)
     }

  
}
