var determineTriangleType = require('../src/determine-triangle-type')
var assert = require('assert');

describe('determineTriangleType', function () {
    it('should export a function', function () {
        // assert
        assert.equal(typeof determineTriangleType, 'function')
    })

    it('should throw if the first parameter is equal to zero', function () {
        // arrange
        var testFunction = function () {
            determineTriangleType(0)
        }
        // act
        // assert
        assert.throws(testFunction, 'a should be a positive number');
    })

    it('should throw if the first parameter is lower than zero', function () {
        // arrange
        var testFunction = function () {
            determineTriangleType(-1)
        }
        // act
        // assert
        assert.throws(testFunction, 'a should be a positive number');
    })

    it('should throw if the first parameter is NaN', function () {
        // arrange
        var testFunction = function () {
            determineTriangleType("this is a string")
        }
        // act
        // assert
        assert.throws(testFunction, 'a should be a positive number');
    })

    it('should throw if the second parameter is equal to zero', function () {

        var testFunction = function () {
            determineTriangleType(1, 0)
        }

        assert.throws(testFunction, 'b should not be a positive number');

    })

    it('should throw if the second parameter is lower than zero', function () {
        // arrange
        var testFunction = function () {
            determineTriangleType(1, -1)
        }
        // act
        // assert
        assert.throws(testFunction, 'b should be a positive number');
    })

    it('should throw if the third parameter is equal to zero', function () {

        var testFunction = function () {
            determineTriangleType(1, 1, 0)
        }

        assert.throws(testFunction, 'c should not be a positive number');

    })

    it('should throw if the third parameter is lower than zero', function () {
        // arrange
        var testFunction = function () {
            determineTriangleType(1, 1, -1)
        }
        // act
        // assert
        assert.throws(testFunction, 'c should be a positive number');
    })

    it('should throw if b is NaN', function () {
        // arrange
        var testFunction = function () {
            determineTriangleType(1, "this is a string")
        }
        // act
        // assert
        assert.throws(testFunction, 'b should be a positive number');
    })

    it('should throw if c is NaN', function () {
        // arrange
        var testFunction = function () {
            determineTriangleType(1, 1, "this is a string")
        }
        // act
        // assert
        assert.throws(testFunction, 'c should be a positive number');
    })
    
    it('should parseFloat the parameters', function () {
        // act
        var result = determineTriangleType("2", "2", "2")
        // assert
        assert.equal(result, "equilateral")
    })

    it('should determine if it is not a triangle', function () {
        var result = determineTriangleType(1, 2, 3)
        // assert
        assert.equal(result, "not a triangle")
    })

    it('should determine if the triangle is equilateral', function () {
        // act
        var result = determineTriangleType(2, 2, 2)
        // assert
        assert.equal(result, "equilateral")
    })

    it('should determine if the triangle is isoceles', function () {
        // act
        var result = determineTriangleType(2, 2, 3)
        // assert
        assert.equal(result, "isosceles")
    })

    it('should determine if the triangle is scalene', function () {
        // act
        var result = determineTriangleType(2, 3, 4)
        // assert
        assert.equal(result, "scalene")
    })

});