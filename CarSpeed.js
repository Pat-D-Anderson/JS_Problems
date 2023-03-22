function Car() {
    this.getSpeed = 0;
    this.setSpeed = function (newSpeed) {
        if(newSpeed > 0) {
            this.getSpeed = newSpeed;
        };
    };
    this.stop = function () {
        this.getSpeed = 0;
    };
};

let car = new Car();

console.log(car.getSpeed);
car.setSpeed(10);
console.log(car.getSpeed);
car.setSpeed(0);
console.log(car.getSpeed);
car.stop();
console.log(car.getSpeed);