var myworld,myengine,body,ball,a,p,ground,stone,rubber,iron,hammer,sand1,sand2,sand3,
sand4,sand5,sand6,sand7,sand8,sand9,sand10,sand11,
sand12,sand13,sand14,sand15,sand16
function preload(){
p=loadImage("back.jpg")
}
function setup(){
createCanvas(1200,700)
myengine=Matter.Engine.create()
myworld=myengine.world;
ground=new Ground(width/2,height-10,width,30)

stone=new Stone(300,685)
rubber=new Rubber(800,685)
hammer=new Hammer(100,600)
iron=new Iron(1000,685)
sand1=new Sand(400,685)
sand2=new Sand(415,685)
sand3=new Sand(430,685)
sand4=new Sand(445,685)
sand5=new Sand(460,685)
sand6=new Sand(475,685)
sand7=new Sand(490,685)
sand8=new Sand(505,685)
sand9=new Sand(520,685)
sand10=new Sand(535,685)
sand11=new Sand(550,685)
sand12=new Sand(565,685)
sand13=new Sand(580,685)
sand14=new Sand(600,685)
sand15=new Sand(615,685)
sand16=new Sand(630,685)

edges = createEdgeSprites()
}
function draw(){
background(p)
Matter.Engine.update(myengine)

ground.display()
stone.display()
hammer.display()
iron.display()
rubber.display()
sand1.display()
sand2.display()
sand3.display()
sand4.display()
sand5.display()
sand6.display()
sand7.display()
sand8.display()
sand9.display()
sand10.display()
sand11.display()
sand12.display()
sand13.display()
sand14.display()
sand15.display()
sand16.display()


}
