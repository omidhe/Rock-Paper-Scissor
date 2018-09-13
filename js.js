var comp_score=0;
var you_score=0;
function rock(){
    var choice=["ROCK","PAPER","SCISSOR"];
    var num=Math.floor(Math.random()*3);
    var comp_choice=choice[num];
    document.getElementById("p1").innerHTML="Computer choose: "+comp_choice;
    document.getElementById("p3").innerHTML="You choose: ROCK";
    if(comp_choice === "PAPER"){
        document.getElementById("p2").innerHTML="OH-NO YOU LOSE.";
        comp_score++;
    }
    if(comp_choice === "ROCK"){
        document.getElementById("p2").innerHTML="ITS A DRAW!!";
    }
    if(comp_choice === "SCISSOR"){
        document.getElementById("p2").innerHTML="YIPPIE!!YOU WIN.";
        you_score++;
    }
    document.getElementById("s1").innerHTML=comp_score;
    document.getElementById("s2").innerHTML=you_score;
}
function paper(){
    var choice=["ROCK","PAPER","SCISSOR"];
    var num=Math.floor(Math.random()*3);
    var comp_choice=choice[num];
    document.getElementById("p1").innerHTML="Computer choose: "+comp_choice;
    document.getElementById("p3").innerHTML="You choose: PAPER";
    if(comp_choice === "PAPER"){
        document.getElementById("p2").innerHTML="ITS A DRAW!!";
    }
    if(comp_choice === "ROCK"){
        document.getElementById("p2").innerHTML="YIPPIE!!YOU WIN.";
        you_score++;
    }
    if(comp_choice === "SCISSOR"){
        document.getElementById("p2").innerHTML="OH-NO YOU LOSE.";
        comp_score++;
    }
    document.getElementById("s1").innerHTML=comp_score;
    document.getElementById("s2").innerHTML=you_score;
}
function scissor(){
    var choice=["ROCK","PAPER","SCISSOR"];
    var num=Math.floor(Math.random()*3);
    var comp_choice=choice[num];
    document.getElementById("p1").innerHTML="Computer choose: "+comp_choice;
    document.getElementById("p3").innerHTML="You choose: SCISSOR";
    if(comp_choice === "PAPER"){
        document.getElementById("p2").innerHTML="YIPPIE!!YOU WIN.";
        you_score++;
    }
    if(comp_choice === "ROCK"){
        document.getElementById("p2").innerHTML="OH-NO YOU LOSE.";
        comp_score++;
    }
    if(comp_choice === "SCISSOR"){
        document.getElementById("p2").innerHTML="ITS A DRAW!!";
    }
    document.getElementById("s1").innerHTML=comp_score;
    document.getElementById("s2").innerHTML=you_score;
}
