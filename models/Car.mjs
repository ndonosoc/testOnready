export {Moto, Auto};

class Vehicle {
    constructor(brand, model, price){
        this.brand = brand,
        this.model = model
        this.price = price
    }
}

class Moto extends Vehicle {
    constructor(brand, model, cilindrada, price){
        super(brand, model, price)
        this.cilindrada = cilindrada
    }
}

class Auto extends Vehicle {
    constructor(brand, model, puertas, price){
        super(brand, model, price)
        this.puertas = puertas
    }
}
