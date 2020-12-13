const deadline = 'December 31 2020 23:59:59 GMT+0200';


function getTimeRemaining(endtime){

    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor( (total/1000) % 60 );
    const minutes = Math.floor( (total/1000/60) % 60 );
    const hours = Math.floor( (total/(1000*60*60)) % 24 );
    const days = Math.floor( total/(1000*60*60*24) );
  
    return {
      total,
      days,
      hours,
      minutes,
      seconds
    };
}





function initializeClock(endTime){
    const clock = document.getElementById("clock");
    const days = document.getElementById("days");
    const hours = document.getElementById("hours");
    const minutes = document.getElementById("minutes");
    const seconds = document.getElementById("seconds");

    const timeinterval =setInterval(() => {
        const t = getTimeRemaining(endTime);
        days.innerHTML=t.days;
        hours.innerHTML=t.hours;
        minutes.innerHTML=t.minutes;
        seconds.innerHTML=t.seconds;
        if (t.total <= 0) {
          clearInterval(timeinterval);
        }
      },1000);
}

initializeClock(deadline);
