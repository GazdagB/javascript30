const secondHand = document.querySelector('.second-hand'); 
const minuteHand = document.querySelector('.min-hand'); 
const hourHand = document.querySelector('.hour-hand')

let isInitailLoad = true; 

function initialLoad(){
    secondHand.style.opacity = "100%"
    minuteHand.style.opacity = "100%"
    hourHand.style.opacity = "100%"
}

async function  setDate(){
    const now = new Date(); 
    const seconds = now.getSeconds(); 
    const minutes = now.getMinutes(); 
    const hour = now.getHours(); 
    
    const secondsDegrees = ((seconds / 60) * 360) 
    const minuteDegrees = ((minutes / 60 ) * 360)
    const hourDegrees = ((minutes / 12) * 360)
    
    secondHand.style.transform = `rotate(${secondsDegrees}deg )`; 
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`
    
}



hourHand.addEventListener("transitionend", (e)=>{
    if(isInitailLoad){
        secondHand.style.opacity = 1
        minuteHand.style.opacity = 1
        hourHand.style.opacity = 1
    }
    
})

setInterval(setDate, 1000); 

