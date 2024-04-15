const length = 16;

const upperCase = "ASDFGHJKLQWERTYUIOPZXCVBNM";
const lowerCase = "asdfghjklqwertyuiopzxcvbnm";
const number = "1234567890";
const specialChar = "!@#$%^&*()_+{}|:\"<>?,./;'[]\\=-";

const allCharachterskey = upperCase + lowerCase + number + specialChar;

function generatePassword(){
    let passwordPlace = document.getElementById("password");
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += specialChar[Math.floor(Math.random() * specialChar.length)];

    while(length > password.length){
        password += allCharachterskey[Math.floor(Math.random() * allCharachterskey.length)];
    }

    passwordPlace.value = password;
}


function copyPassword(){
    let copied = document.getElementById("copied");
    let textValue = document.getElementById("textValue");
    let password = document.getElementById("password");

    password.select();
    document.execCommand("copy")

    copied.style.display = "block";
    textValue.innerHTML = "Copied";

    setTimeout(function() {
        copied.style.display = "none";
    }, 2000);

}

function viewPassword(){
    let hide = document.getElementById("hide");
    let show = document.getElementById("show");
    let password = document.getElementById("password");
    if(password.type == "password"){
        password.type = "text";
        hide.style = "display: none";
        show.style = "display: block";
    }
    else{
        password.type = "password";
        hide.style = "display: block";
        show.style = "display: none";
    }
}
onkeydown = function(){
    
    let msg = document.getElementById("msg");
    let strength = document.getElementById("strength");
    let password = document.getElementById("password");
    let inputZone = document.getElementById("inputZone")
    let strengthBar = document.getElementById("strengthBar")
    
    password.addEventListener("input", () => {
        if(password.value.length > 0){
            msg.style.display = "block";
            strengthBar.style.display = "block";
            inputZone.style.border = "1px solid white";
        }
        else{
            msg.style.display = "none";              
            strengthBar.style.display = "none";        
            inputZone.style.border = "1px solid white";
        }
        if(password.value.length < 4 && password.value.length > 0){
            strength.innerHTML = "weak"
            strengthBar.style.width = "31%";  
            msg.style.color = "rgb(219, 148, 148)";            
            inputZone.style.border = "2px solid rgb(219, 148, 148)";
            strengthBar.style.border = "1px solid rgb(219, 148, 148)";
        }
        else if(password.value.length > 4 && password.value.length < 8){
            strength.innerHTML = "medium"
            strengthBar.style.width = "62%";  
            msg.style.color = "yellow";            
            inputZone.style.border = "2px solid yellow";
            strengthBar.style.border = "1px solid yellow";
        }
        else if(password.value.length > 8){
            strength.innerHTML = "strong"
            strengthBar.style.width = "93%";  
            msg.style.color = "lightgreen";            
            inputZone.style.border = "2px solid lightgreen";            
            strengthBar.style.border = "1px solid lightgreen";
        }        

    });
}
;
let setMsg = "Password is too short";
let genMsg = "<i class=\"fa-solid fa-circle-bolt\"></i> Password Generated!";


function toastMessage(msg){
    let password = document.getElementById("password");

    if(password.value.length > 4 && msg == setMsg) {
        setMsg = "<i class=\"fa-solid fa-circle-check\"></i> Seccussfully password setted!"
        msg = setMsg
    }
    else if (password.value.length <= 4 && msg == setMsg){
        setMsg = "<i class=\"fa-solid fa-circle-exclamation\"></i>Password is too short"
        msg = setMsg
    }

    
    let toastBox = document.getElementById('toastBox')
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastBox.appendChild(toast);

    if(msg.includes('short')){
        toast.classList.add('yellow');
    }
    if(msg.includes('Seccussfully')){
        toast.classList.add('green');
    }
    if(msg.includes('Generated!')){
        toast.classList.add('red');
    }

    setTimeout(() => {
        toast.remove();
    }, 4000)
}

