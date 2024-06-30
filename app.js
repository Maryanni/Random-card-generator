let valueCenter = document.querySelector('.value');
let valueIcons = document.querySelectorAll('.icon');


document.addEventListener("DOMContentLoaded", function(){
    const arrIcon = [`<i class="fa-solid fa-chess-king"></i>`,`<i class="fa-regular fa-chess-queen"></i>`];
    const arrletter = ["J", "A"];
    let numberRandom = Math.floor((Math.random() * 9) +2);
    const combineArr = arrIcon.concat(arrletter,numberRandom);

    function getRandom(arr){
        const randomIndex = Math.floor(Math.random() * arr.length);
        return arr[randomIndex];
    }
    let randomNewValue = getRandom(combineArr);
    valueCenter.innerHTML = randomNewValue;


    const arrPalos = [`♦`,`♥`,`♠`,`♣`];
    function getRandomIcon(arr){
        const randomIcon =  Math.floor(Math.random() * arr.length);
        return arr[randomIcon];
    } 
    let randomNewIcon = getRandomIcon(arrPalos);
    if(randomNewIcon === `♥` || randomNewIcon === `♦`){
        document.body.style.color = "red";
        valueCenter.style.color = "black";
    }
    
    valueIcons.forEach(valueIcon => {
        valueIcon.textContent = randomNewIcon;        
    })
});