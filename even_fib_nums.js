/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */

const _sumFibs = ( maxFibValue ) => {
  const fibs = [  ];
  let sum = 0;

  const fibsUpTo = ( num ) => {
    let current = 1;
    let previous = 0;
    let temp;
    
    while ( current < num ) {
      temp = current; // current = temp = 5, previous = 3;
      current += previous; // current = 8, temp = 5, previous =3;
      previous = temp; // current = 8, previous = 5, temp = 5;
      console.log( `**temp is: ${ temp }, current is: ${ current }, previous is: ${ previous}` );
      console.log( '\n' );
      fibs.push( current );
    }
    return fibs;
  }

  fibsUpTo( maxFibValue );
  console.log( fibs );

  for ( let i = 0; i < fibs.length; i++ ) {
    if ( fibs[i] % 2 === 0 ) {
      sum += fibs[i];
    }
  }

  return sum;
}

// bonus round
function _highestFibonacciNumber (maxFibValue){
  var highest = 0;

  //define your base case, validate your input


  //do your work here

  return highest;
};

/**
 * Do not modify code below.
 * You must be at least level 10 to understand.
 */
module.exports = {
  sumFibs : _sumFibs,
  highestFibonacciNumber : _highestFibonacciNumber
};