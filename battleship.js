var location1=Math.floor(Math.random()*10);
var location2=Math.floor(Math.random()*10);

var location3=Math.floor(Math.random()*10);
var guess;
var hits=0;
var guesses=0;
var isSunk=false;
function play(){
while(isSunk==false)
{
    guess=prompt("Guess the location of the ship (0-6)");
    if(guess<0||guess>10)
    {
        alert("Invalid location.");
    }
    else
    {
        guesses++;
        if(guess==location1||guess==location2||guess==location3)
        {
            hits++;
            if(hits==3)
            {
                isSunk=true;
                alert("You sank my battleship in "+guesses+" tries");
            }
        }
    }
    
}
var stats="Your shooting accuracy was "+(3/guesses)*100+"%";
alert(stats);
}