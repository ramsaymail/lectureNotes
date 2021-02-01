/**
 * a ternary is the shortcut version to write a conditional
 * 
 * 
 */

 let num = 6;

 if(num > 0) {
    console.log('The number is positive.');
 } else {
     console.log('The number is negative.');
 }

 let num = -10;
 
 num > 0 ? console.log('the number is positve.') : console.log('the number is negative');

 let luckyNumber = 5;

 (luckyNumber == 4) ? console.log('The numbers match')
     : (luckyNumber < 4) ? console.log('less than') 
     : (luckyNumber > 4) ? console.log('greater than')
     : console.log(luckyNumber);