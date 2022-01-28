var myGlobal = 50;

function fun1() {
  var oopsGlobal = 5;
}

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal is a global variable, and it is equal to " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += "\noopsGlobal is also global, and it is equal to " + oopsGlobal;
  }

  console.log(output);
}

fun1();
fun2();