class Stone {
   constructor(x,y){
      this.w=150
      this.h=100
  this.body=Matter.Bodies.rectangle(x,y,this.w,this.h,{
   density:50,
   friction:50,
   restitution:0
   

       }
   )
  Matter.World.add(myworld,this.body)
 this.img=loadImage("sto.png")
    }
    display(){
      push()
      imageMode(CENTER) 
    translate(this.body.position.x,this.body.position.y)
    rotate(this.body.angle)
     image(this.img,0,0,this.w,this.h) 
      pop()
      }
    }