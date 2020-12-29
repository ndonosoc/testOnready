export {Moto, Auto};

class Vehicle {
    constructor(brand, model, price){
        this.brand = brand,
        this.model = model
        this.price = price
    }
}

class Moto extends Vehicle {
    constructor(brand, model, engine, price){
        super(brand, model, price)
        this.engine = engine
    }
}

class Auto extends Vehicle {
    constructor(brand, model, doors, price){
        super(brand, model, price)
        this.doors = doors
    }
}
