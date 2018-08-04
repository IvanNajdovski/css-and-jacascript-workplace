var smile = document.getElementById("smile-icon");
var icon = document.getElementById("icon-change");

var url_string = window.location.href; //window.location.href
var url = new URL(url_string);
var something = url.searchParams.get("something");
var raiting = document.getElementById("raiting")
raiting.innerText = something;

if(something < 2){
    smile.setAttribute("xlink:href" , "img/sprite.svg#crying")
    icon.style.backgroundColor = "red";

}else if (something < 30){

    smile.setAttribute("xlink:href" , "img/sprite.svg#confused")
    icon.style.backgroundColor= "orangered";
}
else if(something < 56){

    smile.setAttribute("xlink:href" , "img/sprite.svg#neutral")
    icon.style.backgroundColor = "orange";
}else if(something < 70){

    smile.setAttribute("xlink:href" , "img/sprite.svg#smile")
    icon.style.backgroundColor = "lightgreen";
}else{

    smile.setAttribute("xlink:href" , "img/sprite.svg#happy")
    icon.style.backgroundColor = "green";
}
//console.log(c);