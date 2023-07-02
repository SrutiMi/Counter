/*  
1. store the counter value 
2.on decrese button click, decrease the counter value
3.on increase button click, increase the counter value
4.on reset button click, reset the counter value
5. display the counter value
6.red for negative numbers
7.Green for positive number
*/
let count=0;

//For decrease button
document.querySelector('.js-decrease').addEventListener('click',()=>{
  count--;
  document.querySelector('.js-counter-number').innerHTML=count;
  updateCounterColor();
});

//For Increase button
document.querySelector('.js-increase').addEventListener('click',()=>{
  count++;
  document.querySelector('.js-counter-number').innerHTML=count;
  updateCounterColor();
})

//For Reset button
document.querySelector('.js-reset').addEventListener('click',()=>{
  count=0;
  document.querySelector('.js-counter-number').innerHTML=count;
  updateCounterColor();
})

const counterNumber=document.querySelector('.js-counter-number');

//if the number is less than zero then add the class red and styling is done on that class
function updateCounterColor(){
      if(count<0){
      counterNumber.classList.add('red');//this adds the class red
      counterNumber.classList.remove('green');
    }else{
      counterNumber.classList.remove('red');
      counterNumber.classList.add('green');
    }
}

