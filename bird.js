class Bird{
    constructor(x, y){

        var options={
            restitution:0.5,
            friction:1,
            density:1.5
        }

        this.body = Bodies.rectangle(x, y, 50, 50, options);
        this.width = 50;
        this.height = 50;
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        pos.x = mouseX;
        pos.y = mouseY;
        push(); //save the settings
        fill("red");
        translate(pos.x,pos.y); // origin of point
        rotate(angle); //rotates using the angle mentioned
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop(); //restore the settings
    }

}