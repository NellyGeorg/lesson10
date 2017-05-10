/*
if(1>2)
{
console.log("We are in the false block.");
}
else
{
    console.log("We are in the true block.");
}
//-----------
if(5<13)
{
    document.write("The first block if runs.");
}
else if(13<5)
{
    document.write("This can't be true.");
}
else if(13==5)
{
    document.write("Are you serious?");
}
else
{
    document.write("Ok time to learn to math.");
}

//------------

var myName = "Alie.";
var herName = "Emmy.";
if(myName == "Emmy.")
{
    document.write("Nope,my name is Alie.");
}
else if(herName == "Emmy.")
{
    document.write("Yep,she is Emmy.");
}
else if (myName == herName)
{
document.write("You are crazy fish.");
}
//-----------
if(12>15)
{
    document.write("Bee ,false.");
}
else if(12==15)
{
    document.write("Nope.");
}
else if (12<15)
{
    document.write("Finally.");
}
//-------
var a = 22;
var b = 4;
var c = 7 + 1;
if(a < b)
{
    document.write("Nope.");
}
else if(a + b > c )
{
    document.write("You are still crazy fish.");
}
else if (a == b == c)
{
    document.write("Ok.");
}
//----------
*/
var lunch = prompt ("What would you like for lunch?");
switch(lunch)
{
    case"Sandwich":
    console.log("Sure thing!One sandwich coming up!");
//break;
case"banana":
console.log("Steward yey.");
//break;
case"soup":
console.log("Chilly soup!");
//break;
case"nutela creape with banana":
console.log("Yammy.");
//break;
default:
console.log("I'm not sure what " + lunch + " is , How about a sandwich.");
break;
}
