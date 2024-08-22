let lenEl = document.getElementById("len");
lenEl.value = "0";

function decrement(){
    let val = Number.parseInt(lenEl.value);
    if(val > 0){
        val--;
    }
    lenEl.value = val.toString();
}

function increment(){
    let val = Number.parseInt(lenEl.value);
    if(val >= 0){
        val++;
    }
    lenEl.value = val.toString();
}

const arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", ";", ":", "\"", "'", "<", ">", ",", ".", "?", "/", "\\", "|", "~", "`", "1", "2", "3", "4", "5", "6", "7", "8", "9","0"];
let arrLength = arr.length;

let passwordEl = document.getElementById("pass");

function generatePassword(){
    let length = Number.parseInt(lenEl.value);
    
    let pass = "";
    for(let i = 0; i < length; i++){
        pass += arr[Math.floor(Math.random() * arrLength)];
    }
    passwordEl.value = pass;
}