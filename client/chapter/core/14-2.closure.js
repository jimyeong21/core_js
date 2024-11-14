function state(init) {
  let value = init;
  function read() {
    return value;
  }
  function write(newValue) {
    value = newValue;
  }
}
