// function addClickListenerToButton() {
    var button = document.getElementById("submit-button");
    button.addEventListener('click', determineTriangleTypeFromInput);
// }

function determineTriangleTypeFromInput() {
    var a = document.getElementById("side1").value;
    var b = document.getElementById("side2").value;
    var c = document.getElementById("side3").value;
    try {
        var result = determineTriangleType(a, b, c);
        if (result === "isosceles") {
            document.getElementsByClassName("result")[0].style.backgroundColor = "green";
            document.getElementById("result-text").innerHTML = "Isosceles";
        } else if (result === "equilateral") {
            document.getElementsByClassName("result")[0].style.backgroundColor = "green";
            document.getElementById("result-text").innerHTML = "Equilateral";
        } else if (result === "scanele") {
            //changes colour and the text for the result
            document.getElementsByClassName("result")[0].style.backgroundColor = "green";
            document.getElementById("result-text").innerHTML = "Scalene";
        } else {
            document.getElementsByClassName("result")[0].style.backgroundColor = "red";
            document.getElementById("result-text").innerHTML = result;
        }
    } catch (err) {
        document.getElementsByClassName("result")[0].style.backgroundColor = "red";
        document.getElementById("result-text").innerHTML = err;
    }
}

function determineTriangleType(a, b, c) {
    // a,b,c can be string
    a = parseFloat(a)
    b = parseFloat(b)
    c = parseFloat(c)

    if (a <= 0 || isNaN(a)) {
        throw new Error('a should be a positive number');
    }
    if (b <= 0 || isNaN(b)) {
        throw new Error('b should be a positive number');
    }
    if (c <= 0 || isNaN(c)) {
        throw new Error('c should be a positive number');
    }

    if ((a + b) <= c || (a + c) <= b || (b + c) <= a) {
        return "not a triangle";
    }

    if (a === b && b === c) {
        return "equilateral";
    }

    if (a === b || a === c || b === c) {
        return "isosceles";
    }

    return "scalene";
}

module.exports = determineTriangleType;