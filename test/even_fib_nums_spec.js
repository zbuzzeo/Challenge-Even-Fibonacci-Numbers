var sumOfEvenFibonacciNumbers = require( './../even_fib_nums.js' );
var chai = require( 'chai' );
var should = chai.should();

describe( 'Sum of even numbers in the Fibonnacci sequence', function() {

  it( 'should return the sum of all even Fibonacci numbers when given 13', function() {
    var sum = sumOfEvenFibonacciNumbers( 13 );
    sum.should.equal( 10 );
  });

  it( 'should return the sum of all even Fibonacci numbers when given 34', function() {
    var sum = sumOfEvenFibonacciNumbers( 34 );
    sum.should.equal( 44 );
  });

  // when your tests pass, uncomment the next test and
  // change the expected value to the correct result

  // it( 'should return the sum of all even Fibonacci numbers when given 4,000,000', function() {
  //   var sum = sumOfEvenFibonacciNumbers(4000000);

  //   // CHANGE THE VALUE OF 'X' to the correct number
  //   sum.should.equal( 'X' );
  // });

});