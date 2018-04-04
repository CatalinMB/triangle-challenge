function triangleGenerator(){
    
    var a = document.getElementById("side1").value;
    var b = document.getElementById("side2").value;
    var c = document.getElementById("side3").value;

    if(a.length != 0 && b.length != 0 && c.length != 0){
        console.log(a,b,c);
        if(typeof a =='number' && typeof b =='number' && typeof c =='number'){
            
            if (a === b && b === c)
                // return "equilateral";
                document.getElementById("result-text").innerHTML = "equilateral";
            else
                if(a===b || a === c || b===c)
                    // return "isosceles";
                    document.getElementById("result-text").innerHTML = "isosceles";
                else
                    // return "scalene";
                    document.getElementById("result-text").innerHTML = "scalene";
            }
        else
        {
            window.alert("Please input only numbers")
        }
        }
    else
    {
        window.alert("Please complete all the values")
    }
}

// document.getElementById("result-text").innerHTML = triangleGenerator();
console.log(triangleGenerator(side1,side2,side3));