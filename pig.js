class pig
{
    constructor(x,y)
    {
       var options = {
            'restitution':0.8, 
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x,y,50,50,options);
        this.width = 50;
        this.height = 50;
        World.add(world,this.body);
    }
    display()
    {
        var angle = this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        stroke("green");
        strokeWeight(4);
        rect(0,0,this.width,this.height);
        pop();
    }
}