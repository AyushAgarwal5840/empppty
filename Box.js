class Box extends BaseClass {
    constructor(x,y,width,height) {
      super(x,y,50,50)
        var options = {
            isStatic: false,
            'restitution':0.2,
            'friction':1,
            'density':0.1
        }
        this.Visiblity = 255;
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
       
        if(this.body.speed<3){
          super.display();
        }
  
        else{
          World.remove(world,this.body);
          push();
          this.Visiblity=this.Visiblity-5;
          tint(255,this.Visiblity);
          image(this.image,this.bopdy.position.x,this.position.y,50,50);
          pop();
        }
      
      }
      
  };
  