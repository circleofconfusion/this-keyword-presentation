// "use strict";
function FakeClass() {
  this.a = 1;
  this.b = 2;

  this.modifyMember = function modifyMember(key, val) {
    this[key] = val;
    logThis();
  }

  function logThis() {
    console.log(this);
  }

  // logThis = () => console.log(this);
}

const o1 = new FakeClass();
o1.modifyMember('a', 2);