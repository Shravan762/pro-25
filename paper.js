class paper{
    constructor(x,y,r)
    {
      var options={
      isStatic:false,
      "restitution":0.3,
      "friction":0,
      "density":1.2,
      }
      this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
        this.image=loadImage("paper.png")
		World.add(world, this.body);

    }
    display()
    {
        var paperpos=this.body.position
        Push()
      translate(paperpos.x,paperpos.y)
    imageMode(CENTER)
     ellipse(this.x,this.y,this.r,this.r)
       Pop()
    }
    
}