class Devce{
    name ="lg";
    price = 1000;
    category = "electronics";

}

let d1 = new Device();
console.log(d1.name);

// constructor
//ek aise machien jp final prodcut prodcuce krri h usko constcutor function kehte

//factory m machine jo hoti h uskon constructoe function kehte h
class BottleMaker{
    constuctor(public name : string, public price : number){
        console.log(`name is ${name} and price is ${price}`);
    }

}

let b1 =new BottleMaker("milto",200);
//suppose this constuctor is like machine we have to give all thing how u want bottle like material and brand price theses were included into 
// into constructor and we can create several objects from contructor