var container = document.getElementById("header");
var input = document.getElementById("input");
var buttons = document.getElementById("btn-2");
 var valueOne = document.getElementById("value-1");
 //var link = document.getElementById("link");
 // var value-next = document.getElementById("value-next")
 var mood;
$("input").on('input', function () {
    $("input").trigger('change');
});
$("input").change(function(){
    var value = $("input").val();

    $('.input').on('mousemove', function () {
    if (value < 3 ){
        container.innerText = "PLEASE Get me out of here";
        container.style.color = "red";
        input.style.color.focus= "red";
        $("#myStyle").remove();
        $("#myStyle1").remove();
        $("#myStyle2").remove();
        $("<style id=\"myStyle\" type='text/css'>.input:hover::-webkit-slider-thumb{background:rgba(255, 0, 0); background-image: url('../img/png/crying.png');}</style>").appendTo($("head"));
        $("<style id=\"myStyle1\" type='text/css'>.input::-webkit-slider-thumb{background:rgba(255, 0, 0); background-image: url('../img/png/crying.png');}</style>").appendTo($("head"));
        $("<style id=\"myStyle2\" type='text/css'>.input::-webkit-slider-runnable-track{background:rgba(255, 0, 0); }</style>").appendTo($("head"));
    }
    else if(value < 30){
        container.innerText = "I didnt enjoy it  at all";
        container.style.color = "orangered";
        input.style.color = "orangered";
        $("#myStyle").remove();
        $("#myStyle1").remove();
        $("#myStyle2").remove();
        $("<style id=\"myStyle\" type='text/css'>.input:hover::-webkit-slider-thumb{background:rgba(255, 69, 0); background-image: url('../img/png/confused.png');}</style>").appendTo($("head"));
        $("<style id=\"myStyle1\" type='text/css'>.input::-webkit-slider-thumb{background:rgba(255, 69, 0); background-image: url('../img/png/confused.png');}</style>").appendTo($("head"));
        $("<style id=\"myStyle2\" type='text/css'>.input::-webkit-slider-runnable-track{background:rgba(255, 69, 0); }</style>").appendTo($("head"));

    }else if(value < 56){
        container.innerText = "It was a good week";
        container.style.color = "orange";
        input.style.color = "orange";
        $("#myStyle").remove();
        $("#myStyle1").remove();
        $("#myStyle2").remove();
        $("<style id=\"myStyle\" type='text/css'>.input:hover::-webkit-slider-thumb{background:rgba(255, 169, 0);background-image: url('../img/png/neutral.png');} </style>").appendTo($("head"));
        $("<style id=\"myStyle1\" type='text/css'>.input::-webkit-slider-thumb{background:rgba(255, 169, 0); background-image: url('../img/png/neutral.png');}</style>").appendTo($("head"));
        $("<style id=\"myStyle2\" type='text/css'>.input::-webkit-slider-runnable-track{background:rgba(255, 169, 0); }</style>").appendTo($("head"));

    }else if(value < 70){
        container.innerText = "This was a great week";
        container.style.color = "rgba(0, 255, 0)";
        input.style.color = "rgba(0, 255, 0)";
        $("#myStyle").remove();
        $("#myStyle1").remove();
        $("#myStyle2").remove();
        $("<style id=\"myStyle\" type='text/css'>.input:hover::-webkit-slider-thumb{background:rgba(0, 255, 0);background-image: url('../img/png/smile.png');}</style>").appendTo($("head"));
        $("<style id=\"myStyle1\" type='text/css'>.input::-webkit-slider-thumb{background:rgba(0, 255, 0); background-image: url('../img/png/smile.png');}</style>").appendTo($("head"));
        $("<style id=\"myStyle2\" type='text/css'>.input::-webkit-slider-runnable-track{background:rgba(0, 255, 0); }</style>").appendTo($("head"));

    } else{
        container.innerText = "I love my job";
        container.style.color = "green";
        input.style.color = "green";
        $("#myStyle").remove();
        $("#myStyle1").remove();
        $("#myStyle2").remove();
        $("<style id=\"myStyle\" type='text/css'>.input:hover::-webkit-slider-thumb{background:rgba(0, 128, 0);background-image: url('../img/png/happy.png');}</style>").appendTo($("head"));
        $("<style id=\"myStyle1\" type='text/css'>.input::-webkit-slider-thumb{background:rgba(0, 128, 0); background-image: url('../img/png/happy.png');}</style>").appendTo($("head"));
        $("<style id=\"myStyle2\" type='text/css'>.input::-webkit-slider-runnable-track{background:rgba(0, 128, 0); }</style>").appendTo($("head"));

    };
        console.log($("head"));

    });
    mood = value
    return mood;
})
buttons.onclick= function () {
    link.setAttribute("href" , `next.html?something=${mood}`)
    //valueOne.innerText = mood;
};

// var something = 50;
// localStorage.setItem('items', JSON.stringify(something));


