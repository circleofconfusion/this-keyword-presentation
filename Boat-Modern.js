"use strict";
class Boat {
  name;
  speed = 0;
  bearing = 0;

  constructor (name, maxSpeed, maxReverse) {
    this.name = name;
    this.maxSpeed = maxSpeed;
    this.maxReverse = maxReverse;
  }

  adjustSpeed(ktAdjustment) {
    this.speed += ktAdjustment;
    if (this.speed > this.maxSpeed) this.speed = this.maxSpeed;
    if (this.speed < this.maxReverse) this.speed = -this.maxReverse;
  }

  setBearing(bearing) {
    this.bearing = bearing;
    if (this.bearing >= 360) this.bearing %= 360;
    if (this.bearing < 0) this.bearing = 360 + this.bearing % 360;
  }

  status() {
    return `${this.name} is a ${this.constructor.name} moving ${this.speed} knots with a bearing of ${this.bearing} degrees`;
  }
}

const cigaretteBoat = new Boat('59\' Tiranna', 63, 15);
cigaretteBoat.adjustSpeed(30);
cigaretteBoat.setBearing(90);
console.log(cigaretteBoat.status());
