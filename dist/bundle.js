(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function determineTriangleType(a, b, c) {

    // parstFloat the inputs because the textfields return a string
    a = parseFloat(a)
    b = parseFloat(b)
    c = parseFloat(c)

    //the inputs do not respect the triangle law regarding the lenghts of the sides
    if ((a + b) <= c || (a + c) <= b || (b + c) <= a) {
        return "not a triangle";
    }
    else{
        // if all the inputs are equal, it is a equilateral triangle
        if (a === b && b === c) {
            return "equilateral";
        }

        //if two inputs are equal and the law is respected, it is a isosceles triangle
        if (a === b || a === c || b === c) {
            return "isosceles";
        }

        //if the law is respected and all the inputs are different, it is a scalene
        if(a && b && c){
        return "scalene";
        }
        }
}

module.exports = determineTriangleType;
},{}],2:[function(require,module,exports){
var determineTriangleType = require('../src/determine-triangle-type')

var button = document.getElementById("submit-button");
button.addEventListener('click', determineTriangleTypeFromInput);

function determineTriangleTypeFromInput() {

    var a = document.getElementById("side1").value;
    var b = document.getElementById("side2").value;
    var c = document.getElementById("side3").value;

     //the inputs can be strings or numbers lower or equal to 0
     if (a <= 0 || isNaN(a)) {
        document.getElementsByClassName("mdl-textfield__input")[0].required = true;
    }
    if (b <= 0 || isNaN(b)) {
        document.getElementsByClassName("mdl-textfield__input")[1].required = true;
    }
    if (c <= 0 || isNaN(c)) {
        document.getElementsByClassName("mdl-textfield__input")[2].required = true;
    }

    try {

        var result = determineTriangleType(a, b, c);

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
},{"../src/determine-triangle-type":1}]},{},[2]);
