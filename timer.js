
    var min = 0;
    var sec = 0;
    var ms = 0;
    var minH = document.getElementById('min');
    var secH = document.getElementById('sec');
    var msH = document.getElementById('ms');

    var interval;
    function timer(){
      ms++ ;
      msH.innerHTML = ms;
      if( ms >= 100){
          sec++;
          secH.innerHTML = sec;
          ms = 0;
      }
      else if(sec >= 60){
          min++;
          minH.innerHTML = min;
          sec = 0;
      }
    }
    function start(){
    interval = setInterval(timer,10);
}
    function pause(){
        clearInterval(interval);
    }
    function reset(){
        min = 0;
        sec = 0;
        ms = 0;
        minH.innerHTML = min;
        secH.innerHTML = sec;
        msH.innerHTML = ms;
        pause(); 
           }
