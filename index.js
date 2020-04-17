var numberOfDrumButtons=document.querySelectorAll(".drum").length;

for(var i=0;i<numberOfDrumButtons;i++){
  document.querySelectorAll("button")[i].addEventListener("click", function(){
      var currentWord=this.innerHTML;
      sound(currentWord);
      buttonAnimate(currentWord);
  })
}

document.addEventListener("keypress",function(event){
  sound(event.key);
  buttonAnimate(event.key);
})

function sound(key){
  switch (key) {
    case 'w':
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
    break;

    case 'a':
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
    break;

    case 's':
      var audio = new Audio("sounds/tom-3.mp3");

      audio.play();
    break;

    case 'd':
      var audio = new Audio("sounds/tom-4.mp3");

      audio.play();
    break;

    case 'j':
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
    break;

    case 'k':
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
    break;

    case 'l':
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
    break;

    default: console.log();
  }
}

function buttonAnimate(key){
  var active=document.querySelector("."+key);
  active.classList.add("pressed");

  setTimeout(function(){
    active.classList.remove("pressed");
  },100);
}
