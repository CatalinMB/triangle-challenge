function triangleGenerator(){
    
    var a =  number = document.getElementById("side1").value;
    var b =  number = document.getElementById("side2").value;
    var c =  number = document.getElementById("side3").value;

    if(a.length != 0 && b.length != 0 && c.length != 0){

        a = parseFloat(a);
        b = parseFloat(b);
        c = parseFloat(c);
       
        if(!isNaN(a) && !isNaN(b) && !isNaN(c)){

            if(a >= 0 && b >= 0 && c >= 0){

                if((a+b)>c && (a+c)>b && (b+c)>a) {

                    if (a === b && b === c){
                        // return "equilateral";
                        document.getElementById("result-text").innerHTML = "Equilateral";
                        // document.getElementById("triangle").style.display = "flex";
                        // document.getElementById("triangle").style.backgroundImage("./equilateral.png");
                    }
                    else{
                        if(a===b || a === c || b===c){
                            // return "isosceles";
                            document.getElementById("result-text").innerHTML = "Isosceles";
                            // document.getElementById("isosceles").style.display = "flex";
                        }
                        else
                        {
                            // return "scalene";
                            document.getElementById("result-text").innerHTML = "Scalene";
                            // document.getElementById("scalene").style.display = "flex";
                        }
                    }
                }
                else{
                    window.alert("Triangle : A side needs to be smaller than the sum of the other two")
                }
            }
            else
            {
                window.alert("Sides cannot have the length 0 or less")
            }
        }
        else
        {
            window.alert("Please input only numbers");
        }
    }
    else
    {
        window.alert("Please complete all the values");
    }
}

module.exports = triangleGenerator;