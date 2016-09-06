$(document).ready(function(){
var audioElement = document.createElement('audio');
audioElement.setAttribute('src', 'assets/.mp3');
 $(".themeButton").on("click", function(){
            audioElement.play();
      });
$(".pauseButton").on("click", function(){
        audioElement.pause();
      });


    var number = (5 * 100);
    var correct = 0;
    var incorrect = 0;


    function run(){
      counter = setInterval(decrement, 100);
  }

  function decrement(){
   number--;
   $('#timerDisplay').html('<h2>'+"Answer all the question before you run out of time!"+'</h2>'+ " " + "<h1>"+"Time Left:"+" "+ number + "</h1>")

   if (number === 0){
    stop();
    alert('Time Up!')
}
}


function stop(){
    clearInterval(counter);
}
/*
var check ="value";
$('button').on("click", function() {
  if ($(this).attr("value")){
    console.log(check);
  }
  });*/

/*
function check(){

  whichAnswer = document.getElementByName("antiClickA");
  len = whichAnswer.length
  for (i =0;i<len;i++)
   {
  
    if (whichAnswer[i].checked){
       console.log(whichAnswer[i].value);
    }
}
  $("#answersOne").onclick(check);
}
*/


run();         


});