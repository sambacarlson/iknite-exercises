// script.js

//getElementById object
const getElts = {
  expression_ : document.getElementById('expression_'),
  answer_ : document.getElementById('answer_'),
  cancel_ : document.getElementById('cancel_'),
  equals_ : document.getElementById('equals_'),
  backspace_ : document.getElementById('backspace_'),
  one_ : document.getElementById('one_'),
  two_ : document.getElementById('two_'),
  three_ : document.getElementById('three_'),
  four_ : document.getElementById('four_'),
  five_ : document.getElementById('five_'),
  six_ : document.getElementById('six_'),
  seven_ : document.getElementById('seven_'),
  eight_ : document.getElementById('eight_'),
  nine_ : document.getElementById('nine_'),
  open_ : document.getElementById('open_'),
  zero_ : document.getElementById('zero_'),
  close_ : document.getElementById('close_'),
  add_ : document.getElementById('add_'),
  subtract_ : document.getElementById('subtract_'),
  multiply_ : document.getElementById('multiply_'),
  divide_ : document.getElementById('divide_')
}

//standard variables/placeholders
var expression_value = '';
var answer_value = '0';

/*EVENT LISTENERS */

//get every input and add to ex_pression value
getElts.expression_.addEventListener('input', () => {
  expression_value = getElts.expression_.value;
  getElts.answer_.innerHTML = expression_value;
});

getElts.backspace_.addEventListener('click', backSpace);
getElts.cancel_.addEventListener('click', clearAll);
getElts.equals_.addEventListener('click', reply);


/* EVENT LISTENER METHODS */
//backspace. only deletes last entry
function backSpace() {
  let exlen = expression_value.length - 1;
  if(exlen>=0) {
    expression_value = expression_value.substring(0, exlen); //get substring. to be changed
    getElts.expression_.value = expression_value; //change value of input field to substring
    expression_value = getElts.expression_.value; // update variable to new value on screen
    if(exlen==0) getElts.answer_.innerHTML = '0'; // if there are no more values to delete, set answer to zero. to be removed
    console.log(expression_value); //for testing purpose. to be deleted
}
  else return;
}

//clears display
function clearAll() {
  expression_value = '';
  getElts.expression_.value = '';
  getElts.answer_.innerHTML = '0';
}

//invoked when = sign pressed
function reply() {
  answer_value = expression_value; //testing purpose
  getElts.answer_.innerHTML = answer_value;
  console.log(answer_value);
}

/* GET NUMERIC AND OPERATOR INPUT */
getElts.one_.addEventListener('click', getOne);
function getOne() {
  updateExpression('1');
}

getElts.two_.addEventListener('click', getTw0);
function getTw0() {
  updateExpression('2');
}

getElts.three_.addEventListener('click', getThree);
function getThree() {
  updateExpression('3');
}

getElts.four_.addEventListener('click', getFour);
function getFour() {
  updateExpression('4');
}

getElts.five_.addEventListener('click', getFive);
function getFive() {
  updateExpression('5');
}

getElts.six_.addEventListener('click', getSix);
function getSix() {
  updateExpression('6');
}

getElts.seven_.addEventListener('click', getSeven);
function getSeven() {
  updateExpression('7');
}

getElts.eight_.addEventListener('click', getEight);
function getEight() {
  updateExpression('8');
}

getElts.nine_.addEventListener('click', getNine);
function getNine() {
  updateExpression('9');
}

getElts.zero_.addEventListener('click', getZero);
function getZero() {
  updateExpression('0');
}

getElts.open_.addEventListener('click', getOpen);
function getOpen() {
  updateExpression('(');
}

getElts.close_.addEventListener('click', getClose);
function getClose() {
  updateExpression(')');
}

getElts.add_.addEventListener('click', getAdd);
function getAdd() {
  updateExpression('+');
}

getElts.subtract_.addEventListener('click', getSubtract);
function getSubtract() {
  updateExpression('-');
}

getElts.multiply_.addEventListener('click', getMultiply);
function getMultiply() {
  updateExpression('*');
}

getElts.divide_.addEventListener('click', getDivide);
function getDivide() {
  updateExpression('/');
}

/* SUPPORT METHODS  */
//set new values to expression variable and expression screen. makes sure they match at all times
//use this methode only for numeric and operator buttons. not for controls. to be fixed
// alson only appends to the end of expression. to be fixed
function updateExpression(update) {
  getElts.expression_.value += update; 
  expression_value = getElts.expression_.value;
  console.log(expression_value); //test to see expression value
}
