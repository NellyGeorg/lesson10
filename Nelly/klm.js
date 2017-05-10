/*
var answer = prompt("red,white or blue?");
answer = answer.toLowerCase();
switch(answer){
    case "red":
  console.log("You have chosen red!");
  break;
  case "white":
  console.log("You have chosen white!");
break;
case "blue":
console.log("You have chosen blue!");
break;
default:
console.log("This color is unknow!");
}

//----Using new code()
switch(new Date().getDay()){
     case 0:
     day = "Sunday";
     break;
     case 1:
     day = "Monday";
     break;
     case 2: 
     day = "Tuesday";
     break;
     case 3:
     day = "Wednesday";
     break;
    case 4:
     day = "Thursday";
     break;
      case 5:
    day = "Friday";
     break;
      case 6:
       day = "Saturday";
       break;
}
console.log(new Date);
//-----------for loops
for (i=0;i<=20;i++){
    console.log(i)
}
for (i=0;i<=18;i+=3){
    console.log(i)
}

for (i=13;i<=0;i--){
    console.log(i)
}
//-----------for loops
for (i=35;i<=55;i+=2){
    console.log(i + " i love you")
}
//-----
var count;
document.write("Starting Loop" +"<br />");
for(count = 0 ;count<10;count ++)
{
    document.write("Current Count:" + count);
    document.write("<br />" );
}
document.write("Loop stopped!");
//------
for(var i = 0;i <=20;i++){
    if(i % 2 === 0){
        console.log(i +" is even");
    }else{
        console.log( i +" is odd");
    }
}
*/
/*//---
for( var multiplier = 0;multiplier <= 10;multiplier++){
    for(var i = 0;i<=10;i++){
        var result = multiplier * i;
        console.log(multiplier + "*" +i + "-" + result);
    }
}
*/
//-------
/*
var i = 0;
while(i < 10){
    console.log(" The number is " +  i);
    i++;
}
//----
var count = 0;
document.write("Starting Loop");

while (count < 10 ){
    document.write( "Sleep" + "<br />");
    count++;
}
document.write(" Blah,Blah,Blah");
*/
/*
 var count = 4;
document.write("Pizza");

while (count < 10 ){
    document.write( "Pizza,Pizza,Pizza" + "<br />");
    count++;
}
document.write(" I love Pizza" + "<br/>");

document.write(" You love Pizza" + "<br/>");

document.write(" Everypone love Pizza" + "<br/>");

var i = 0 ;
do {
    console.log(" The number  of pizzas is " + i);
    i++;
}
while(i <= 55);
//---
*/
var count = 0 ;
document.write(count + "Starting loop" + "<br/>");
do{
document.write(" Current Count :" + count + "<br/>");
count++;
console.log(" Happy Hippo" );
}
while(count<=12);
document.write(count + "Loop stopped");