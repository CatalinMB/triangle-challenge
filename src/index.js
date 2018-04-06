//import the function 
var determineTriangleType = require('../src/determine-triangle-type')

//add a click event for the button since browserify doesn't allow calling the function from the html
var button = document.getElementById("submit-button");
button.addEventListener('click', determineTriangleTypeFromInput);

function determineTriangleTypeFromInput() {

    //user inputs
    var a = document.getElementById("side1").value;
    var b = document.getElementById("side2").value;
    var c = document.getElementById("side3").value;

     //if the inputs are not filled, add the required attribute for the input fields
    if (isNaN(a)) {
        document.getElementsByClassName("mdl-textfield__input")[0].required = true;
    }
    if (isNaN(b)) {
        document.getElementsByClassName("mdl-textfield__input")[1].required = true;
    }
    if (isNaN(c)) {
        document.getElementsByClassName("mdl-textfield__input")[2].required = true;
    }

    try {

        var result = determineTriangleType(a, b, c);

        //change the colour and the text based on the right result
        if (result === "isosceles") {
            document.getElementsByClassName("result")[0].style.backgroundColor = "yellow";
            document.getElementById("result-text").innerHTML = "Isosceles";

        } 
        else {
            if (result === "equilateral") {
                document.getElementsByClassName("result")[0].style.backgroundColor = "green";
                document.getElementById("result-text").innerHTML = "Equilateral";
            } 
            else{
                if (result === "scalene") {
                    //changes colour and the text for the result
                    document.getElementsByClassName("result")[0].style.backgroundColor = "purple";
                    document.getElementById("result-text").innerHTML = "Scalene";
                }
                if (result === "not a triangle")
                {
                    document.getElementsByClassName("result")[0].style.backgroundColor = "red";
                    document.getElementById("result-text").innerHTML = "Not a triangle";
                }
            }
        }
    } 
    catch (err) {
        document.getElementsByClassName("result")[0].style.backgroundColor = "red";
        document.getElementById("result-text").innerHTML = err;
    }
}