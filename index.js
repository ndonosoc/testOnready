import {Moto, Auto} from "./models/Car.mjs"
// import {getCheapestCar} from "./utils.js"

let Vehicles = [
    new Auto("Peugeot", "206", "4", "200.000,00"),
    new Moto("Honda", "Titan", "125cc", "60.000,00"),
    new Auto("Peugeot", "208", "5", "250.000,00"),
    new Moto("Yamaha", "YBR", "160cc", "80.500,50")
]

Vehicles.forEach(vehicle => {
    if(vehicle instanceof Moto){
        console.log(`Marca: ${vehicle.brand} // Modelo: ${vehicle.model} // Cilindrada: ${vehicle.engine} // Precio: $${vehicle.price}`);
    } else {
        console.log(`Marca: ${vehicle.brand} // Modelo: ${vehicle.model} // Puertas: ${vehicle.doors} // Precio: $${vehicle.price}`);
    }
});

console.log(`=============================`);

let mostExpensiveVehicle = Vehicles.reduce((a, b) => parseFloat(a.price) > parseFloat(b.price) ? a : b);

console.log("Vehículo más caro:", mostExpensiveVehicle.brand, mostExpensiveVehicle.model);

let cheapestVehicle = Vehicles.reduce((a, b) => parseFloat(a.price) < parseFloat(b.price) ? a : b);

console.log("Vehículo más barato:", cheapestVehicle.brand, cheapestVehicle.model);

let vehicleWithY = Vehicles.filter(c => {
    if(c.model.includes('Y')){
        return c.model
    }
});

vehicleWithY.forEach(car => {
    console.log(`Vehículo que contiene en el modelo la letra ‘Y’: ${car.brand} ${car.model} $${car.price}`);
});

console.log(`=============================`);

console.log(`Vehículos ordenados por precio de mayor a menor:`);

let sortedVehicles = Vehicles.sort((a, b) => parseFloat(a.price) < parseFloat(b.price) ? 1 : -1);

sortedVehicles.forEach(car =>{
    console.log(`${car.brand} ${car.model}`)
});



