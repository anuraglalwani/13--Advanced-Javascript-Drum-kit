
var noOfDrumButtons = document.querySelectorAll(".drum").length;

for(var i=0;i<noOfDrumButtons;i++)
document.querySelectorAll("button")[i].addEventListener("click",function(){
   // alert("i got clicked");
   var buttonInnerHtml = this.innerHTML;
   makeSound(buttonInnerHtml);
   buttonAnimation(buttonInnerHtml);
 
 });
 //document keyboard press
 document.addEventListener("keydown", function(event){
   makeSound(event.key);
   buttonAnimation(event.key);
 });

 function makeSound(key)
 {
  switch(key)
  {
     case 'w':
     var crach= new Audio("sounds/crash.mp3");
     crach.play();
     break;
     case 'a':
     var kickAss= new Audio("sounds/kick-bass.mp3");
     kickAss.play();
     break;
     case 's':
     var snare= new Audio("sounds/snare.mp3");
     snare.play();
     break;
     case 'd':
     var tom1= new Audio("sounds/tom-1.mp3");
     tom1.play();
     break;
     case 'j':
     var tom1= new Audio("sounds/tom-1.mp3");
     tom1.play();
     break;
     case 'k':
     var tom1= new Audio("sounds/tom-1.mp3");
     tom1.play();
     break;
     case 'l':
     var tom1= new Audio("sounds/tom-1.mp3");
     tom1.play();
     break;
     default:console.log("srry ");
  }

 }
 function buttonAnimation(currentKey)
 {
      var activeButton = document.querySelector("."+currentKey);
      activeButton.classList.add("pressed");
      setTimeout(function(){
        activeButton.classList.remove("pressed");
      },100);
 }