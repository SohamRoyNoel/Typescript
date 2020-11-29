// interface Car {
//   type: 'Car';
//   runningSpeed: number;
// }

// interface Truck {
//   type: 'Truck';
//   carryingCapacity: number
// }

// type Vehicle= Car | Truck;

// function machine(vehicle: Vehicle){
//   let unknownVariable;
//   switch(vehicle.type){
//     case 'Car':
//       unknownVariable = vehicle.runningSpeed;
//       break;
//     case 'Truck':
//       unknownVariable = vehicle.carryingCapacity;
//       break;
//   }

//   console.log('Data Retrived : ' + unknownVariable);
// }

// machine({type:'Car', runningSpeed:100});
// machine({type:'Truck', carryingCapacity:1000});