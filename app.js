// navbar logic
const open = document.querySelector('.fa-bars');
const bg = document.querySelector('.box-nav');
const cancel = document.querySelector('.fa-times');
const trans = document.querySelector(".box-nav");
const btn = document.getElementById('btn-f');

let folow = 'Following'

btn.addEventListener('click', function(e){
    const style = e.currentTarget.classList;
    if(style.contains ('btn-nav-follow')){
        folow = 'Following'
    }
    btn.textContent = folow;
});

open.addEventListener('click', function(){
 return document.querySelector('.box-nav').style.display = 'block';
});

cancel.addEventListener('click', function(){
 return document.querySelector('.box-nav').style.display = 'none';
});

// likes logic
const likesDiv = document.querySelector('.rr');
const liki = document.querySelector('.likes');
const thumbs = document.querySelector('.cancel2');

liki.addEventListener('click', function(){
    if(liki === document.querySelector('.likes')){
        return document.querySelector('.rr').style.display = 'block';
    }
});

thumbs.addEventListener('click', function(){
    return document.querySelector('.rr').style.display = 'none';
});

const value = document.querySelector('.num-of-likes');
const btnLike = document.querySelector('#btnl');

let count = 120;
    btnLike.addEventListener("click", function (e) {
      const styles = e.currentTarget.classList;
      if (styles.contains("likes")) {
        count++;
      }
      value.textContent = count;
    });




