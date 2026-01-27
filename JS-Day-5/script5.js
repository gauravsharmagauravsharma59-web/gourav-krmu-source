// var a=10;
// console.log(a);
// function demo(){
//     let b=20;
//     console.log(b);
// }
// demo()

let user = {
  FullName: "Gourav Sharma",
  Address: "Delhi, India",
  Mobileno: "9876543210",
  Favcolor: ["red", "blue", "green"]
}
console.log(user.Favcolor1);
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

const car = {
    make:"Mahindra",
    model:"Thar"
};
// Object.seal(car);

car.model="XEV9E"
car.color = "Blue"; //This property addition is ignored
console.log(car)