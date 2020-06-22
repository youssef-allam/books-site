var intro = document.getElementById("intro"),
    btn = document.getElementById("btn");

function noScroll(e) {
    'use strict';
   
    window.scrollTo(0, 0);
}

// add listener to disable scroll
window.addEventListener('scroll', noScroll);

//its an arrow function to make intro go up

btn.onclick = () => {
    intro.style.transform = `translatey(-1000px)`;
    // Remove listener to re-enable scroll
window.removeEventListener('scroll',noScroll);
}
// we will use the btn with a form
const btn2 = document.getElementById("btn_scale"),
      form =document.getElementById("form"),
      form2 = document.getElementById("form2"),
      signup = document.getElementById("new"),
      btnfalse = document.getElementById("false"),
      btnfalse2 = document.getElementById("false2"),
      not = document.getElementById("fixed"),
      name =document.getElementById("nam").Value;



btn2.onclick= () =>{
    form.style.transform = "scale(1)";
}
btnfalse.onclick= () => {
     form.style.transform = "scale(0)";
     form2.style.transform = "scale(0)";
}

btnfalse2.onclick= () => {
     form.style.transform = "scale(0)";
     form2.style.transform = "scale(0)";
}
signup.onclick= () => {
    form.style.transform = "scale(0)";
     form2.style.transform = "scale(1)";

}


window.onscroll = function() {
    console.log(scroll);
    var scroll= window.scrollY;
    if(scroll >= 100){
        not.style.transform="translatey(0px)";
    }
    else{
        not.style.transform="translatey(-100px)";
    }
}
    



















