var levelNum =1;
$(document).keydown(function () {
    if (levelNum==1){start()}
})

$(".btn").click(function () {
    // find the Id for the color button
    var userChosenColor = this.id;
    // add that color to the array
    userClickedPattern.push(userChosenColor)
    // console.log("buttonpress= "+userClickedPattern)// To check the array
    // add sound
    sound(userChosenColor)
    // click effects 
    $("#"+userChosenColor).addClass("pressed")
    setTimeout(() => {$("#"+userChosenColor).removeClass("pressed")}, 100);
    // check the clicked value
    check()
    // call start again
});

var gamePattern =[];
var userClickedPattern =[];
function start(){
    // Add the Level in H1 and with the level number
    $("h1").text("Level "+levelNum)
    // randomNum to get a random number from 0-3
    var randomNum = Math.floor(Math.random()*4);
    // array with the color name
    var buttonColor = ["red","blue","green","yellow"];
    // calling the array element with the help of randomNum as an index of the array
    var randomChosenColor = buttonColor[randomNum];
    // apend the values of randomChosenColor to the array game Pattern
    gamePattern.push(randomChosenColor);
    // adding fadin and fadeOut effect using the jquery property
    $("#"+randomChosenColor).fadeOut(100).fadeIn(100);
    sound(randomChosenColor)
    // console.log("randompress- "+gamePattern)
    levelNum= levelNum+1

    
    
    
}

function check(){
    // check variable
    var flag = 0;
    // loop till the lenght of  usercreated pattern array
    for(i=0;i<userClickedPattern.length;i++){
        // if the element of usercreatedpattern array is not equal to the gamepattern
        if(gamePattern[i]!=userClickedPattern[i]){
            // console.log("lose");
            // change the value for the check variable
            flag = 1;
            //adding game-over class to the body
            $("body").addClass("game-over")
            // to flash the screen for 200 milisecond removeing the class game-over
            setTimeout(()=>{$("body").removeClass("game-over")},200)
            sound("wrong")
            levelNum =1;
            // changing the h1 to Game Over
            $("h1").text("Game Over Click any key to restart ");
            // resetting the arrays
            userClickedPattern =[]
            gamePattern = []

        }
    }
    // check condition for the match of the array
    if(userClickedPattern.length==gamePattern.length){
    if(flag ==0){
        // console.log("win");
        userClickedPattern = []
        // calling the function start after 1000 milliseconds
        setTimeout(() => {start()}, 1000);}
    }}


// sound function
function sound (x){
    var audio = new Audio ("sounds/"+x+".mp3");
    audio.play()
}