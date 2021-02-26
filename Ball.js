class Ball{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'frictionAir':0.001,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, 35,options);
        this.radius = 70;
        this.image = loadImage("sprites/bird.png")
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        fill("grey")
        image(this.image, 0, 0, this.radius,this.radius);
        pop();
      }
}