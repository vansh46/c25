class paper
{
	constructor(x,y,r)
	{
        var options = {
          isStatic:false,
          restitution:0.3,
         friction:0,
         density:1.2



        }
		this.x=x;
		this.y=y;
		this.r=r;
		
		
		this.image=loadImage("paper.png")
		this.body = Bodies.circle(this.x,this.y(this.r-20)/2,options)
		World.add(world,this.body);
		

	

	}
	display()
	{
			var paperpos=this.body.position;
			

			

			push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			//strokeWeight(4);
		
			fill(255,0,255)
			rotate(this.angle)
			//rect(0,0,this.wallThickness, this.dustbinHeight);
			pop()

			push()
			translate(posRight.x, posRight.y);
			rectMode(CENTER)
			//strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			rotate(-1*this.angle)
			//rect(0,0,this.wallThickness, this.dustbinHeight);
			pop()

			push()
			translate(posBottom.x, posBottom.y+10);
			rectMode(CENTER)
			//strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			imageMode(CENTER);
			image(this.image, 0,-this.dustbinHeight/2,this.dustbinWidth, this.dustbinHeight)
			//rect(0,0,this.dustbinWidth, this.wallThickness);
			pop()
			
	}

}