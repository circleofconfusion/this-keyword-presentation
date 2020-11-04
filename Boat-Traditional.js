function Boat (name, maxSpeed, maxReverse) {
  this.name = name;
  this.speed = 0;
  this.bearing = 0;
  this.maxSpeed = maxSpeed;
  this.maxReverse = maxReverse;
}

Boat.prototype.adjustSpeed = function adjustSpeed(ktAdjustment) {
  this.speed += ktAdjustment;
  if (this.speed > this.maxSpeed) this.speed = this.maxSpeed;
  if (this.speed < this.maxReverse) this.speed = -this.maxReverse;
}

Boat.prototype.setBearing = function setBearing(bearing) {
  this.bearing = bearing;
  if (this.bearing >= 360) this.bearing %= 360;
  if (this.bearing < 0) this.bearing = 360 + this.bearing % 360;
}

Boat.prototype.status = function status() {
  return `${this.name} is a ${this.constructor.name} moving ${this.speed} knots with a bearing of ${this.bearing} degrees`;
}

const canoe = new Boat('Old Town Tripper', 3, 3);
canoe.adjustSpeed(3);
canoe.setBearing(120);
console.log(canoe.status());