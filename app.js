console.log('hello');

const open = document.querySelector('.fa-bars');
const bg = document.querySelector('.box-nav');
const cancel = document.querySelector('.fa-times');
const trans = document.querySelector(".box-nav");
const btn = document.getElementById('btn-f');

btn.addEventListener('click', function(){
    return document.getElementById('btn-f').innerHTML = 'Following';
})

open.addEventListener('click', function(){
 return document.querySelector('.box-nav').style.display = 'block';
})

cancel.addEventListener('click', function(){
 return document.querySelector('.box-nav').style.display = 'none'
})
