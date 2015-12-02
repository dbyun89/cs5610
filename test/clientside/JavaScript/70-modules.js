var math = (function() {
  var api = {
    addx: add,
    subtract: subtract
  };
  return api;
  
  function add(a, b)
  {
    return a + b;
  }
  
  function subtract(a, b)
  {
    return a - b;
  }
}) ();

(function(math) {
  alert(math.addx(2,3));
  alert(math.subtract(5,2));
}) (math);
