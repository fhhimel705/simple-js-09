let cars = [
  { id: 1, car: "nissan", model: "gtr", gear: "manuaL" },
  { id: 2, car: "supra", model: "mk3", gear: "maNual" },
  { id: 3, car: "toyota", model: "m2", gear: "auto" },
  { id: 4, car: "bmw", model: "m4 gsr", gear: "Manual" },
  { id: 5, car: "ds auto-mobile", model: "tense", gear: "auto" },
];

// for(i=0; i<cars.length; i++){
//     let car = cars[i];
//     console.log(car);
// }

/*--------- for of loop -----------*/
// for(const car of cars){
//     console.log(car);
// }

/*-----search----------*/
function findManual(cars, search) {
    let manualCars = [];
  for (const car of cars) {
    if(car.gear.toLowerCase().includes(search.toLowerCase())){
        manualCars.push(car);
    }
  }
  return manualCars;
  
}
console.log(findManual(cars, "MANUAL"));
