let randomNumber = Math.floor(Math.random() * 6) + 1;
let randomImageSource = "dice" + randomNumber + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);

let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomImageSource1 = "dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource1);


if (randomNumber > randomNumber1) {
    document.querySelector("h1").innerHTML = "BOY IS WINNER"
    document.querySelectorAll("p")[0].innerHTML = "BOY 👦🏻"
    
}
else if (randomNumber1 > randomNumber) {
    document.querySelector("h1").innerHTML = "GIRL IS WINNER"
     document.querySelectorAll("p")[1].innerHTML = "GIRL 👧🏻"
    
    
}
else   {
    document.querySelector("h1").innerHTML = "MATCH IS DRAW 🙆🏻‍♀️🙋🏻‍♂️"
    
}
