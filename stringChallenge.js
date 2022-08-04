function getString(s){
    let stringLength = s.length; //variable to store string length
    let firstLetter  = s.charAt(0); //variable to store first letter
    let lastLetter = s.charAt(stringLength-1);  //variable to store first letter
    let repeatIndex = ""; //variable to store index of repeated letter
    let returnArray = []; //array to store results


    const i = Math.floor(stringLength/2); //check if the string is even or odd and return 1 or 2 middle characters
    let middleLetter = s[i];
    if(stringLength % 2 === 0 && i > 0){
        middleLetter = s[i-1] + middleLetter;
    }


    for(let i = 0; i < s.length; i++){ //for loop to check if the letter repeats and return the index if found
        if(s.indexOf(s[i]) !== s.lastIndexOf(s[i])){
            repeatIndex = " @ index " + s.lastIndexOf(s[i]);
        }else{
            repeatIndex = "Not found";
        }
    }


    //push everything into the array
    returnArray.push(stringLength);
    returnArray.push(firstLetter);
    returnArray.push(lastLetter);
    returnArray.push(middleLetter);
    returnArray.push(repeatIndex);

    //return the array
    return returnArray;

}

console.log(getString("Computer"));