window.addEventListener('keydown', function (e){
    const audio = this.document.querySelector(`audio[data-key="${e.key}"]`)
    const key = this.document.querySelector(`.key[data-key="${e.key}"]`)
    if(!audio){
        return
    }
    audio.currentTime = 0;
    audio.play()
    key.classList.add('playing')
})

const keys = document.querySelectorAll('.key');

function removeTransition(e){
if(e.propertyName !== 'transform') return 
console.log(e.propertyName)
this.classList.remove("playing")
}

keys.forEach(key => key.addEventListener("transitionend", removeTransition))