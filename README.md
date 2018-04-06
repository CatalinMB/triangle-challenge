# Triangle-challenge

Application that takes three values and determines if it is a triangle and what kind it is (Isosceles, Scalene, Equilateral).

## Getting Started

Clone the project and open index.html in browser.

### Prerequisites

This poject uses npm(Node package manager) to install it's dependendecies. 

To install npm, you can install the latest version of NodeJS.

### Installing
After installing npm, run the following in the terminal:

This installs the dependecies needed for the project to run.
```
npm install
```
The project supports an extra command  ```npm run compile``` for when the source files have been changed.

## Running the tests

The project uses MochaJs framework to run tests.

### Break down into unit tests

The project supports the following tests:
- If the inputs are filled
- If the values from the inputs are float positive numbers
- If the values respect the law regarding the lengths of the triangle
- If the triangle is isosceles, equilateral or scalene.

```
  it('should throw if the first parameter is NaN', function () {
        // arrange
        var testFunction = function () {
            determineTriangleType("this is a string")
        }
        // act
        // assert
        assert.throws(testFunction, 'a should be a positive number');
    })

```

## Built With

* [MochaJs](https://mochajs.org/) - The unit test framework
* [Browserify](http://browserify.org/) - Used for exporting modules
* [Material Design Lite](https://getmdl.io/index.html) - Used for styling the web page 

## Authors

* **Marius-Catalin Bunescu** - [Triangle-challenge](https://github.com/CatalinMB/triangle-challenge)

## Implementation choices:

Using Vanilla Javascript over a framework for a small scale project was the first choice, due to effiency and lack of unused functions that any modern framework has.

The unit testing has been done in the MochaJs framework, due to it's flexibility and easy to understand structure. MochaJs doesn't understand the element "document" because it's using NodeJs, therefore one solution was splitting the functions in two different .js files, in which one calls the other one. 

Browserify was used for exporting modules (calling a function from a different file).

## Design decisions:

Material design was used due to it's popularity, responsiveness and because it's intuitive. By using material design web project are not being held up by UI or UX. 