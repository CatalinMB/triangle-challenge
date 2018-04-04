function triangleGenerator(a, b, c){
    if (a === b && b === c)
        return "equilateral"
    else
        if(a===b || a === c || b===c)
            return "isosceles"
        else
            return "scalene"
}

document.getElementById("result-text").innerHTML = triangleGenerator(4,3,5)