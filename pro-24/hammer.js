class Hammer{
    constructor(x,y){
        this.w=120
        this.h=150
    this.body=Matter.Bodies.rectangle(x,y,this.w,this.h,{
     density:2,
     friction:1.0,
     restitution:0.5  
    })
    Matter.World.add(myworld,this.body)
    this.img=loadImage("ham.png")
    }
    display(){
    this.body.position.x=mouseX
    this.body.position.y=mouseY
    push()
    
    imageMode(CENTER) 
    translate(this.body.position.x,this.body.position.y)
    rotate(this.body.angle)
    image(this.img,0,0,this.w,this.h) 
    pop()
    }
    }