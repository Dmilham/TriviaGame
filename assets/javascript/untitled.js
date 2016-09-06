var number = (1 * 100);

function run(){
  counter = setInterval(decrement, 100);
        }

function decrement(){
           number--;
$('#timerDisplay').html('<h2>'+"You have this long to answer all the questions:"+" " + number + '</h2>')

            if (number === 0){
                stop();
                alert('Time Up!')
            }
        }

    
        function stop(){
            clearInterval(counter);
        }
        
        run(); 