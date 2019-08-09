// CW1
// Print -10 through 5 using a counter and while loop.

var num = parseInt("-10");

while (num <= 5){
    console.log(num);
    num++
}


// CW2
// Write a While loop that counts backwards from 10 to 0 Log the current count at the end of each iteration EXCEPT if the current count is 5
// HINT: Use continue

 var nnum = 10;

while (nnum >=0){
    if (nnum === 5){
        nnum = nnum -1;
    }
    else{
        console.log(nnum);
        nnum = nnum - 1;

    }
}




// CW3
// Asks the user Enter a word. Enter 'q' to quit. Create a while loop that will not quit until they enter 'q'.
//     HINT: Use true condition so loop continues forever and break to exit the loop

while (0 === 0){
    var magic = prompt("Enter a word");

    if (magic === "q"){
        break;
    }
    else if (magic === "Q"){
        break;
    }
    else{
        alert("Thank you");
    }
}

// NOTE : you weren't supposed to use break but I guess I'll let it slide
