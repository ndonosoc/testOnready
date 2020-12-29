export function getCheapestCar

const getCheapestCar = () => {
    let minCar = Vehicles.reduce((a, b) => parseFloat(a.price) < parseFloat(b.price) ? a : b);

    console.log("Vehículo más barato:", minCar.brand, minCar.model);
};