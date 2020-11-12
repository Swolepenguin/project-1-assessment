let plus= document.querySelector('.plus');
let minus= document.querySelector('.minus');
let display= document.querySelector('.display');
let input= document.getElementById('#num');

let count= 0;
//let input=1;
counter()
colorChange()

plus.addEventListener("click",()=>{
    count++;
    counter();
});

minus.addEventListener("click",()=>{
    count--;
    counter();
});

function counter(){
    display.innerHTML = count;
};


function colorChange(){
    if(count < 0){
        return display.style.color = "red"
    }
}
