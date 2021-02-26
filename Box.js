class Box{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, 70, 70, options);
        this.width = 70;
        this.height = 70;
        this.image = loadImage("sprites/enemy.png")
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        fill("blue")
        image( this.image,0, 0, this.width, this.height);
        pop();
      }
}