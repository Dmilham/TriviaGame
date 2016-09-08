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

$("#play").on("click", function(){
    audioElement.play();

    $("#pause").css('display', 'block');
    $("#play").css('display', 'none');
      });

// Questions================================================================================================================================================
$(".questionTwo").html("In Minnesota it is illegal to tease what type of animal?");
$(".questionTwo").html("What kind of pants  does Jake from state farm wear?");
$(".questionThree").html("Which planet has the shortest day of any planet in our solar system - only 9 hours and 55 minutes?");

// Variables================================================================================================================================================
    var number = (1 * 21);
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
     }
// Decreases Time==========================================================================================================================================
  function decrement(){
   number--;
   $('#timerDisplay').html('<h2>'+"Answer all the question before you run out of time!"+'</h2>'+ " " + "<h1>"+"Time Left:"+" "+ time(number)  + "</h1>");

   if (number === 0){
    stop();
    alert('Your Time Is Up!'+' '+ 'You have' + " " + correct + " " + 'Correct' + ' ' + 'and '+ " " +incorrect + ' ' + 'Incorrect' )
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

// Stats timer==============================================================================================================================================


run();  


});

// ==========================================================================================================================================================

