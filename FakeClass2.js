
function FakeClass() {
  const self = this;
  self.a = 1;
  self.b = 2;

  self.modifyMember = function modifyMember(key, val) {
    self[key] = val;
    logThis();
  }

  function logThis() {
    console.log(self);
  }
}

const o1 = new FakeClass();
o1.modifyMember('a', 2);