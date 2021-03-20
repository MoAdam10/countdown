let timerElement = document.getElementById("timer")

let timeRemaining = 5

function countdown(){
  timeRemaining = timeRemaining - 1
  if(timeRemaining <= 0){
    timerElement.innerText = "🚀Liftoff!"
  }else{
     timerElement.innerText = timeRemaining
  }    
}

setInterval(countdown, 1000)