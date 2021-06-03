class Snow{
	constructor(x,y,r)
	{
		var options={
			
		density:0.004,
            friction :1,
			}
		this.x=x;
		this.y=y;
this.r = r;
		this.image=loadImage("snow4.webp");
		this.body= Bodies.circle(x,y,r,options);
		World.add(world, this.body);
	}

	display()
	{
	
        var pos= this.body.position;
        var angle = this.body.angle;
        push()   
         translate(pos.x,pos.y)
        rotate(angle);
        imageMode(CENTER);
		image(this.image, 0,0,this.r,this.r)
		pop()
 }
}