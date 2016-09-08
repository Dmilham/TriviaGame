$(document).ready(function(){

// Sets audio track in the HTML via Javascript=================================================================================================================
var audioElement = document.createElement('audio');
audioElement.setAttribute('src', 'assets/audio/Intermission-short.mp3');

audioElement.play();
// Audio Controls==============================================================================================================================================
$("#pause").on("click", function(){
  audioElement.pause();
  $("#pause").css('display', 'none');
  $("#play").css('display', 'block');

});

// Play Button=================================================================================================================================================
$("#play").on("click", function(){
  audioElement.play();

// Pause Button================================================================================================================================================
$("#pause").css('display', 'block');
$("#play").css('display', 'none');
});

// Questions================================================================================================================================================
$(".questionOne").html("In Minnesota it is illegal to tease what type of animal?");
$(".questionTwo").html("What kind of pants  does Jake from state farm wear?");
$(".questionThree").html("Which planet has the shortest day of any planet in our solar system - only 9 hours and 55 minutes?");

// Variables================================================================================================================================================
var number = (1 * 5);
var correct = 0;
var incorrect = 0;
var valueright="right"
var valuewrong="wrong"
// Converts timer ticks to time=============================================================================================================================
function time(t){
  var minutes = Math.floor(t/60);
  var seconds = t - (minutes * 60);
  if (seconds < 10){
    seconds = "0" + seconds;
  }
  if (minutes === 0){
    minutes = "00";
  } else if (minutes < 10){
    minutes = "0" + minutes;
  }
  console.log(minutes + ":" + seconds)
  return minutes + ":" + seconds;
}
// Starts Timer============================================================================================================================================
function run(){
  counter = setInterval(decrement, 1000);
  $("#reset").css("display", "none");


}
// Decreases Time==========================================================================================================================================
function decrement(){
 number--;
 $('#timerDisplay').html('<h2>'+"Answer all the question before you run out of time!"+'</h2>'+ " " + "<h1>"+"Time Left:"+" "+ time(number)  + "</h1>");

 if (number === 0){
  stop();
  alert('Your Time Is Up!'+' '+ 'You have' + " " + correct + " " + 'Correct' + ' ' + 'and '+ " " +incorrect + ' ' + 'Incorrect' )
  $("#reset").css("display", "block");

}


}

// Stops Timer==============================================================================================================================================
function stop(){
  clearInterval(counter);
}
// Validates and tally's answers============================================================================================================================
$('.buttons').on("click", function(validate){
  if ($(this).attr('value') == valueright) {
   $("#answersOne").css("display", "none");
   correct++;
   console.log("this many correct" + " " + correct)
 } 
 else
  if 
    ($(this).attr('value') == valuewrong) {
      incorrect++;
      $("#answersOne").css("display", "none");
      
      console.log("this many incorrect" + " " + incorrect)
    };


  });

// Validates and tally's answers============================================================================================================================
$('.buttonsTwo').on("click", function(validate){
  if ($(this).attr('value') == valueright) {
   $("#answersTwo").css("display", "none");
   correct++;
   console.log("this many correct" + " " + correct)
 } 
 else
  if 
    ($(this).attr('value') == valuewrong) {
      incorrect++;
      $("#answersTwo").css("display", "none");
      
      console.log("this many incorrect" + " " + incorrect)
    };


  });
// Validates and tally's answers=============================================================================================================================
$('.buttonsThree').on("click", function(validate){
  if ($(this).attr('value') == valueright) {
   $("#answersThree").css("display", "none");
   correct++;
   console.log("this many correct" + " " + correct)
 } 
 else
  if 
    ($(this).attr('value') == valuewrong) {
      incorrect++;
      $("#answersThree").css("display", "none");
      
      console.log("this many incorrect" + " " + incorrect)
    };


  });

$("#reset").on("click", function(){
 number = (1 * 21);
 correct = 0;
 incorrect = 0;    
 audioElement.currentTime = 0;
 audioElement.play();
 $("#answersOne").css("display", "block");
 $("#answersTwo").css("display", "block");
 $("#answersThree").css("display", "block");
 $(".btn-reset").attr('checked',false);
 
$(".questionOne").html("What is the highest rating given a top quality diamond?");
$("#1r1").html("Flawless");
$("#1r2").html("Super Nice");
$("#1r3").html("Perfect");
$(".questionTwo").html("How much coal does it take to get the same amount of energy provided by burning one full cord of seasoned firewood.?");
$("#2r1").html("10 kilograms");
$("#2r2").html("Only Santa needs coal")
$("#2r3").html("1 Ton");
$("#2r4").html("Coal is for diamonds");
$(".questionThree").html("What creature can live for the longest period without any water?");
$("#3r1").html("Armadillo");
$("#3r2").html("Ferrets")
$("#3r3").html("Rats");
$("#3r4").html("Parrots");

});
// Stats timer==============================================================================================================================================
run();  
});
// ==========================================================================================================================================================

