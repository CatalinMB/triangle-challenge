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