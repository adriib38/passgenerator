
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

let specialsChars = ['!', '@', '#', '$', '%', '&', '*', '(', ')', '-', '_', '+', '=', '?', '/', '|', '{','}', '[',']', '^', '~', ':', ';', ',', '.'];

lenght = document.querySelector("#param_lenght").value;
document.querySelector("#num_lenght").innerHTML = lenght;

param_lenght = document.querySelector("#param_lenght").addEventListener("input", function() {
    lenght = document.querySelector("#param_lenght").value;
    document.querySelector("#num_lenght").innerHTML = lenght;

});

btn_generate = document.querySelector("#password").addEventListener("click", function() {
    let password = document.querySelector("#password").innerHTML;
    //Compy in clipboard
    navigator.clipboard.writeText(password+'');
});

function generarPass(){
    let chars = [];
    lenght = document.querySelector("#param_lenght").value;

    if (document.querySelector("#param_letters").checked) {
        chars = chars.concat(letters);
    }

    if (document.querySelector("#param_numbers").checked) {
        chars = chars.concat(numbers);
    }

    if (document.querySelector("#param_specialsChars").checked) {
        chars = chars.concat(specialsChars);
    }

    let password = "";

    if(document.querySelector("#param_specialsChars").checked == false && document.querySelector("#param_numbers").checked == false && document.querySelector("#param_letters").checked == false){
        document.querySelector("#password").innerHTML = 'Select a parameter';
    }else{
        for (let i = 0; i < lenght; i++) {
            let index = Math.floor(Math.random() * chars.length);
            password += chars[index];
        }
        
        document.querySelector("#password").innerHTML = password;
        document.querySelector("#pass-history").innerHTML += `<li>${password}</li>`
    }

}

btn_generate = document.querySelector("#btn-generate").addEventListener("click", generarPass);

generarPass()