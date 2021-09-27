function getResult(){
    let valor1 = document.getElementById("valor1").value 
    let valor2 = document.getElementById("valor2").value
    document.getElementById("resultado").value = valor1 * valor2
}

function myFunction() {
    var person = prompt("Please enter your name", "Harry Potter");
    if (person != null) {
      document.getElementById("demo").innerHTML =
      "Hello " + person + "! How are you today?";
    }
  }