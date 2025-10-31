//function guessGame(){
  //  var guessNumber = 20;
//var number = prompt("Введи число");

//if (number>guessNumber) {
//    alert("Ваше число больше");
//    return guessGame();
//}
//else if (number < guessNumber) {
//    alert("Ваше число меньше");
//    return guessGame();
// }
//else {
//    return alert("Угадали!");
//}
//}
//guessGame();
function reminder() {
    alert("Ты здесь слишком долго!");
    window.location("");
    window.close();
}
//setTimeout(reminder,5000);

function validForm() {

    var name = document.getElementById("name").value;
    console.log(name);
     var password = document.getElementById("password").value;
    console.log(password);
    var reg_name =/^[а-яёA-Z]+$/i;
    var reg_pas = /[0-9A-Z]{5,100}$/i;
    if (reg_name.test(name) == false) {
        alert("Ошибся в ФИО");
    }
     if (reg_pas.test(password) == false) {
        alert("Ошибся в пароле");    
    }
     
}
document.querySelector(".button").addEventListener("click", validForm)


