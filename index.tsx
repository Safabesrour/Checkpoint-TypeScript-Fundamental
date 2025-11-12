interface Vehicle {
make : string; 
model : string ; 
year : number ; 
horsePower? : number; 
start(): void ;
addHorsePower (horsePower: number) : void; 
}
class Car implements Vehicle {
make : string; 
model : string ; 
year : number ; 
horsePower? : number



constructor(make: string , model : string, year: number ) {
    this.make = make
    this.model = model
    this.year = year

  }

 start() {
    console.log("Car engine started");
 }
addHorsePower (puissance: number) {
    this.horsePower = puissance
}

}

const carOne = new Car ('Renault', 'clio4', 2016)
console.log(carOne);
carOne.addHorsePower(150) 
console.log(carOne)
carOne.start () 
