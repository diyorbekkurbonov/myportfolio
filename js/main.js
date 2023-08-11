new WOW().init();

var img = document.querySelectorAll('.aboutme__left-img');
var indicator = document.querySelectorAll('.indicator');
document.querySelector('.right').onclick=right;
document.querySelector('.left').onclick=left;
var counter=0;
function right(){
    img[counter].classList.remove('active')
    indicator[counter].classList.remove('active__indicator')
    counter++
    if(img.length==counter){
        counter=0;
    }
    
    img[counter].classList.add('active')
    indicator[counter].classList.add('active__indicator')
    clearTimeout(timer);
    autoplay();
}
function left(){
    img[counter].classList.remove('active');
    indicator[counter].classList.remove('active__indicator')
    counter--
    if(counter<0){
        counter=img.length-1
    }
    img[counter].classList.add('active');
    indicator[counter].classList.add('active__indicator') 
    clearTimeout(timer);
    autoplay();
}


for(var i = 0; i < indicator.length; i++){
    indicator[i].onclick=function(){
        
        for(var j = 0; j < indicator.length; j++){
            indicator[j].classList.remove('active__indicator')
            img[j].classList.remove('active')
        }
        
        this.classList.add('active__indicator');
        var dataSlide = this.getAttribute('data-slide');
        img[dataSlide].classList.add('active');
        
        counter = dataSlide;
    }
}

var timeInd;

function autoplay() {
    timer = setTimeout(right, 2000);
}
autoplay();

let number = document.getElementById('number');
let count = 0;
setInterval(() => {
    if(count==90){
        clearInterval();
    }else{
        count += 1;
        number.innerHTML=count + "%"
    }
   
}, 22);

let number1 = document.querySelector('.number1');
let count1 = 0;
setInterval(() => {
    if(count1==80){
        clearInterval();
    }else{
        count1 += 1;
        number1.innerHTML=count1 + "%"
    }
   
}, 25);

let number2 = document.querySelector('.number2');
let count2 = 0;
setInterval(() => {
    if(count2==77){
        clearInterval();
    }else{
        count2 += 1;
        number2.innerHTML=count2 + "%"
    }
   
}, 25.5);

let number3 = document.querySelector('.number3');
let count3 = 0;
setInterval(() => {
    if(count3==68){
        clearInterval();
    }else{
        count3 += 1;
        number3.innerHTML=count3 + "%"
    }
   
}, 29);

let number4 = document.querySelector('.number4');
let count4 = 0;
setInterval(() => {
    if(count4==80){
        clearInterval();
    }else{
        count4 += 1;
        number4.innerHTML=count4 + "%"
    }
   
}, 25);
let number5 = document.querySelector('.number5');
let count5 = 0;
setInterval(() => {
    if(count5==70){
        clearInterval();
    }else{
        count5 += 1;
        number5.innerHTML=count5 + "%"
    }
   
}, 26);
