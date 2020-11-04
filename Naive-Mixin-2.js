const movingMixin = {
  // Instance variables can't be set in prototype
  // speed: 0,
  // maxSpeed: 0,
  // maxReverse: 0,
  adjustSpeed(speedChange) {
    this.speed += speedChange;
    if (this.speed > this.maxSpeed) this.speed = this.maxSpeed;
    if (this.speed < this.maxReverse) this.speed = this.maxReverse;
  }
}

const steeringMixin = {
  // Instance variables can't be set in prototype
  // bearing: 0,
  setBearing(bearing) {
    this.bearing = bearing;
    if (this.bearing >= 360) this.bearing %= 360;
    if (this.bearing < 0) this.bearing = 360 + this.bearing % 360;
  }
};

function Boat(name, maxSpeed, maxReverse) {
  this.name = name;
  this.speed = 0;
  this.maxSpeed = maxSpeed;
  this.maxReverse = -maxReverse
};

Object.assign(Boat.prototype, movingMixin, steeringMixin);


function RoadBike(name, maxSpeed) {
  this.name = name;
  this.speed = 0;
  this.maxSpeed = maxSpeed;
  this.maxReverse = 0;
}

Object.assign(RoadBike.prototype, movingMixin, steeringMixin);

function Train(name, maxSpeed, maxReverse) {
  this.name = name;
  this.speed = 0;
  this.maxSpeed = maxSpeed;
  this.maxReverse = -maxReverse;
}

Object.assign(Train.prototype, movingMixin);

const canoe = new Boat('Old Town Tripper', 3, 3);
canoe.adjustSpeed(-3);
canoe.setBearing(270);
console.log(canoe, canoe.__proto__);

const bianchi = new RoadBike('Bianchi', 25);
bianchi.adjustSpeed(10);
console.log(bianchi, bianchi.__proto__);

const hhp8 = new Train("Bombardier-Alstom HHP-8", 135, 135);
hhp8.adjustSpeed(125);
console.log(hhp8, hhp8.__proto__);
