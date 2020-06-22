var name = prompt("write your name please")
document.getElementById("name").innerHTML += `<span> ${name} </span>` ;
 console.log(name);


var clicker = document.getElementById('i'),
    list =document.getElementById('setings'),
    nav =document.getElementById("not");


function clicks(par){
    if(par){
        list.style.transform= "translateX(-255px)";
        console.log("ok");
    }else{
        console.log("no");
        list.style.transform= "translateX(255px)";

    }
}
clicker.addEventListener("click",function(){clicks(true)});
list.firstElementChild.addEventListener("click",function(){clicks(false)});
nav.lastElementChild.addEventListener("click",function(){clicks(true)});

var not =document.getElementById("not");

window.onscroll = function() {
    console.log(scroll);
    var scroll= window.scrollY;
    if(scroll >= 100){
        not.style.transform="translatey(100px)";
    }
    else{
        not.style.transform="translatey(-100px)";
    }
  
}

var i1 =document.getElementsByClassName("i1"),
    i2 =document.getElementsByClassName("i2"),
    x=0;

for(x = 0; x <= i1.length; x += 1){ 
    i1[x].style.backgroundImage= `url("${x+1}.jpg")`;
    i2[x].style.backgroundImage= `url("${x+1}.jpg")`;
}

