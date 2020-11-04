"use strict";
function FakeClass() {
  this.a = 1;
  this.b = 2;
}

FakeClass.prototype.modifyMember = function modifyMember(key, val) {
  this[key] = val;
  logThis.call(this);
}

function logThis() {
  console.log(this, this.__proto__);
}

const o1 = new FakeClass();
o1.modifyMember('a', 2);