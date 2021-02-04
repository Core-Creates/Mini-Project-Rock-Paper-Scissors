
var playing = true;
var options = ["rock", "paper", "scissors"];
var userInputplay = "";
var userChoose = "";
var computerRan;
var computerChoice;


var wins = 0;
var losses = 0;
var draws = 0;


alert("Welcome to the game!");


while (playing == true) {

    userInputplay = prompt("Would you like to play rock, paper, scissors? Y or N").toUpperCase();
    console.log(userInputplay);


    if ("userInputplay") {
        playing = true;
        console.log(playing);
    }
    else{
        playing = false;
        console.log(playing);
    }

    userChoose = prompt("Enter rock, paper, or scissors?");
    userChoose.toLowerCase();
    alert("You have chosen " + userChoose);

    // Grabs random number between -1 and 3 - (0,1,2), and stores it in the computerRan var
    computerRan = Math.floor(Math.random() * 3);

    // computerChoice stores a value of the options array based on the random number generated in the computerRan var
    computerChoice = options[computerRan];
    alert("Computer has chosen " + computerChoice);



// -------------------------------------Comparing userChoose to computerchoice-------------------------------------------------------

    // Checks if userChoose is equal to computerChoice
    if (userChoose == computerChoice) 
    {
        alert("It's a draw!");
        draws++;

        alert("You have lost " + losses + " times");
        alert("You have won " + wins + " times");
        alert("You have tied " + draws + " times");
    }

    
    // if the values for userChoose and computerChoice aren't the same this will run
    else {

        // checks if user input is rock
        if (userChoose == "rock") 
        {
            /* after the user input is determined to be rock
            this if statement will check if the computer choose
            paper. Since paper beats rock this will output you
            if found to be true*/
            if (computerChoice == "paper") 
            {
                alert("Paper covers rock. You lose! 😥");
                losses++;

                alert("You have lost " + losses + " times");
                alert("You have won " + wins + " times");
                alert("You have tied " + draws + " times");


            }

            /* after the user input is determined to be rock
            this if statement and the if statement choose
            paper. Since paper beats rock this will output you
            if found to be true*/
            else 
            {
                alert("Rock smashes scissors. You Win! 🤩");
                wins++;

                alert("You have won " + wins + " times");
                alert("You have lost " + losses + " times");
                alert("You have tied " + draws + " times");
            }

        }
        /*If userChoose isn't rock this else if will check if it 
        is paper. If userChoose is paper this will run*/
        else if (userChoose == "paper") {

            /* After it has been determied that the user choose rock
            this code will run to check if the computer chose rock.
            If it did it will alert the user that they won since paper
            beats rock*/
            if (computerChoice == "rock") 
            {
                alert("Paper covers rock. You win! 🤩");
                wins++;

                alert("You have won " + wins + " times");
                alert("You have lost " + losses + " times");
                alert("You have tied " + draws + " times");
            }
            /* After it has been determied that the user choose rock
            and computer DIDN'T chose rock. If it did it will alert the user 
            that they lost since scissors beats paper. This section doesn't 
            check for computerChoice being paper because the earlier if 
            statement would have caught it and skipped over this code*/
            else 
            {
                alert("Scissors cut paper. You lose! 😥");
                losses++;

                alert("You have won " + wins + " times");
                alert("You have lost " + losses + " times");
                alert("You have tied " + draws + " times");
            }

        }

        // if user input is not rock or paper this code block will run
        else {

            /* if the user choose something other than rock and the 
            computer chose rock this will run. It will assume that 
            the user chose scissors and rock smashes scissors so this
            alert will notify the user that they lost*/
            if (computerChoice == "rock") 
            {
                alert("Rock smashes scissors. You lose! 😥");
                losses++;

                alert("You have won " + wins + " times");
                alert("You have lost " + losses + " times");
                alert("You have tied " + draws + " times");
            }
            else 
            {
                alert("Scissors cut paper. You win! 🤩");
                wins++;

                alert("You have won " + wins + " times");
                alert("You have lost " + losses + " times");
                alert("You have tied " + draws + " times");
            }
        }
    }
} 



