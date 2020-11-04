"use strict";

const canoe = {
  speed: 0,
  bearing: 0,
  maxSpeed: 3,
  maxReverse: 3
}

function adjustSpeed(ktAdjustment) {
  this.speed += ktAdjustment;
  if (this.speed > this.maxSpeed) this.speed = this.maxSpeed;
  if (this.speed < this.maxReverse) this.speed = -this.maxReverse;
}

function setBearing(bearing) {
  this.bearing = bearing;
  if (this.bearing >= 360) this.bearing %= 360;
  if (this.bearing < 0) this.bearing = 360 + this.bearing % 360;
}

Object.setPrototypeOf(canoe, {
  adjustSpeed,
  setBearing
});

canoe.setBearing(180);
canoe.adjustSpeed(5);

console.log(canoe, canoe.__proto__);