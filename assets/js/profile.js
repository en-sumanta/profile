//Typer functionality started
const typedTxtSpan = document.querySelector('.typed-text');
const cursorBlinking =  document.querySelector('.cursor');
const textAarr = ['Website Developer', 'Frontend Developer', 'Quality Analyst'];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000;
let textArrIndex = 0;
let charIndex = 0;
//Typing starting function
function typeWriter(){
    if(charIndex<textAarr[textArrIndex].length){
        if(!cursorBlinking.classList.contains('typing')) cursorBlinking.classList.add('typing');
        typedTxtSpan.textContent += textAarr[textArrIndex].charAt(charIndex)
        charIndex++;
        setTimeout(typeWriter, typingDelay)
    }else{
        //erase the 
        cursorBlinking.classList.remove('typing');
        setTimeout(erase, newTextDelay)
    }
}
//Typing erase function
function erase(){
    if(charIndex>0){
        if (!cursorBlinking.classList.contains('typing')) cursorBlinking.classList.add('typing');
        typedTxtSpan.textContent = textAarr[textArrIndex].substring(0, charIndex-1)
        charIndex--;
        setTimeout(erase, erasingDelay)
    }else{
        cursorBlinking.classList.remove('typing');
        textArrIndex++;
        if(textArrIndex>=textAarr.length) textArrIndex =0;
        setTimeout(typeWriter, typingDelay+1100)
    }
}
document.addEventListener('DOMContentLoaded',function(){
    setTimeout(typeWriter(), newTextDelay+250)
})
//Typer functionality end