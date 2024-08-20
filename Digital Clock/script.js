let intervalId;
let isClockOn = false;

function display(){
    let now = new Date();

    let dateEL = document.getElementsByClassName("sp1")[0];
    let date = now.getDate();
    dateEL.value = date;
    
    let dayEl = document.getElementsByClassName("sp2")[0];
    let dayIndex = now.getDay();
    let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
    dayEl.value = days[dayIndex];

    let hourEl = document.getElementsByClassName("sp3")[0];
    let hour = now.getHours();
    hour = hour < 10 ? '0' + hour : hour;
    hourEl.value = hour + " :";

    let minutesEL = document.getElementsByClassName("sp4")[0];
    let minutes = now.getMinutes();
    minutes = minutes < 10 ? '0' + minutes : minutes;
    minutesEL.value = minutes + " :"; 

    let secondsEl = document.getElementsByClassName("sp5")[0];
    let seconds = now.getSeconds();
    seconds = seconds < 10 ? '0' + seconds : seconds; 
    secondsEl.value = seconds; 
}

function keySwitch(){
    let state = document.getElementById("switch").value;
    if(state === "off"){
        if(!isClockOn){
            intervalId = setInterval(display, 1000);
            isClockOn = true;
        }
        document.getElementById("switch").value = "on";
        document.getElementById("switch").textContent = "Stop";
    }
    else{
        if(isClockOn){
            clearInterval(intervalId);
            isClockOn = false;
        }
        document.getElementById("switch").value = "off";
        document.getElementById("switch").textContent = "Start";

        document.getElementsByClassName("sp1")[0].value = "00";
        document.getElementsByClassName("sp2")[0].value = "";
        document.getElementsByClassName("sp3")[0].value = "00";
        document.getElementsByClassName("sp4")[0].value = "00";
        document.getElementsByClassName("sp5")[0].value = "00";
    } 
}
