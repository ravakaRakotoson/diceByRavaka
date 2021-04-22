var randomNumber1= Math.floor((Math.random() * 6))+1;

var randomImage = "dice" + randomNumber1+ ".png";

var imagesource ="images/" + randomImage;

document.querySelectorAll("img")[0].setAttribute("src",imagesource );

var randomNumber2 = Math.floor(Math.random()*6) + 1;
var imageSource2= "images/dice"+ randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",imageSource2 );

if (randomNumber1> randomNumber2)
{
document.querySelector("h1").innerHTML=" 🚩Poo poo wins";
}else if(randomNumber2>randomNumber1){
  document.querySelector("h1").innerHTML=" Punk wins 🚩";
}
else{
  document.querySelector("h1").innerHTML="draw";
}
