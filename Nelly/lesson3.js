
var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.40) {
	computerChoice = "rock";
} else if(computerChoice <= 0.77) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} 
console.log("Computer: " + computerChoice);

 var compare = function(choice1,choice2){
    if(choice1 === choice2){
        return "The result is a tie!";
        
		
    }
  else  if(choice1 === 'rock') {
        if(choice2 === 'scissors'){
            return 'rock wins';
			
        } 
		else {
            return 'paper wins';
			
        }
    }
};

var res = compare(userChoice,computerChoice);
console.log(res);





var month = prompt("which month are we in now ?");
month = parseInt(month);
switch(month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
  days = 31;
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    days = 30;
    break;
  case 2:
    days = 28;
}

console.log("There are " + days + " days in this month.");