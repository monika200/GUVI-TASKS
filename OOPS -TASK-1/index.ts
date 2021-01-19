type colorData = "red" |"blue"|"yellow"|"green"|"purple";
class Circle {
radius: number;
color: string;
constructor(radiusValue: number, colorValue: string) {
      this.radius = radiusValue;
      this.color = colorValue;
    
}
//OPTIONAL PARAMETERS
    toString(rad?:number,col?:string){
     console.log("I have a optional parameters!");
    }
//DEFAULT PARAMETERS
    getArea(rar:number = 2) {;
      let areaOfCircle = (Math.PI *  (this.radius * this.radius));
      return areaOfCircle;
    }
    getCircumference(rad:number = 3){
      let circumferenceOfCircle = (2 * Math.PI * this.radius);
      return circumferenceOfCircle;
    }
  }

   
  let mycircle = new Circle(1.0 , "red");
  console.log(mycircle.getArea());
  console.log(mycircle.getCircumference());
  mycircle.toString();