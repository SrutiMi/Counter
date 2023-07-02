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
});

//For Increase button
document.querySelector('.js-increase').addEventListener('click',()=>{
  count++;
  document.querySelector('.js-counter-number').innerHTML=count;
})

//For Reset button
document.querySelector('.js-reset').addEventListener('click',()=>{
  count=0;
  document.querySelector('.js-counter-number').innerHTML=count;
})
