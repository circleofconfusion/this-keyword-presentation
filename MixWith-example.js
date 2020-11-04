import { mix } from 'mixwith';

const MovingMixin = (superclass) => class MovingMixin extends superclass {
  adjustSpeed(speedChange) {
    this.speed += speedChange;
    if (this.speed > this.maxSpeed) this.speed = this.maxSpeed;
    if (this.speed < this.maxReverse) this.speed = this.maxReverse;
  }
}

const SteeringMixin = (superclass) => class SteeringMixin extends superclass {
  setBearing(bearing) {
    this.bearing = bearing;
    if (this.bearing >= 360) this.bearing %= 360;
    if (this.bearing < 0) this.bearing = 360 + this.bearing % 360;
  }
}

class Vehicle {
  name = '';
  constructor (name) {
    this.name = name;
  }
}

class Canoe extends SteeringMixin(MovingMixin(Vehicle)) {
  bearing = 0;
  speed = 0;
  maxSpeed = 0;
  maxReverse = 0;
  
  constructor(name, maxSpeed, maxReverse) {
    super(name);
    this.maxSpeed = maxSpeed;
    this.maxReverse = maxReverse;
  }
}

class Train extends mix(Vehicle).with(MovingMixin) {
  speed = 0;
  maxSpeed = 0;
  maxReverse = 0;

  constructor(name, maxSpeed, maxReverse) {
    super(name);
    this.maxSpeed = maxSpeed;
    this.maxReverse = maxReverse;
  }
}

class RoadBike extends mix(Vehicle).with(MovingMixin, SteeringMixin) {
  speed = 0;
  bearing = 0;
  maxSpeed = 0;
  maxReverse = 0;

  constructor(name, maxSpeed) {
    super(name);
    this.maxSpeed = maxSpeed;
  }
}

const tripper = new Canoe('Old Town Tripper', 3, 3);
tripper.adjustSpeed(3);
tripper.setBearing(30);
console.log(
  tripper,
  tripper.__proto__,
  tripper.__proto__.__proto__,
  tripper.__proto__.__proto__.__proto__,
  tripper.__proto__.__proto__.__proto__.__proto__
);

const hhp8 = new Train('Bombardier-Alstom HHP-8', 135, 135);
hhp8.adjustSpeed(125);
console.log(
  hhp8,
  hhp8.__proto__,
  hhp8.__proto__.__proto__,
  hhp8.__proto__.__proto__.__proto__
);

const cannondale = new RoadBike('Cannondale SuperSix EVO', 50);
cannondale.adjustSpeed(40);
cannondale.setBearing(270);
console.log(
  cannondale,
  cannondale.__proto__,
  cannondale.__proto__.__proto__,
  cannondale.__proto__.__proto__.__proto__,
  cannondale.__proto__.__proto__.__proto__.__proto__
);