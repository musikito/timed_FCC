function translatePigLatin(str) {
    // get all the letters from the arguments
    // and split it
    let letterFromStr = str.split("");
    
    // https://www.cheatography.com/davechild/cheat-sheets/regular-expressions/
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
    // made a regex for the vowels
   // global no case
   let vowels = /[aeiou]/gi;
    /**
   * The test() method tests for a match in a string.
   * This method returns true if it finds a match, otherwise it returns false.
   */
  if(vowels.test(letterFromStr[0]))
  {
      //if start with a vowel we add way at the end
      return letterFromStr.join("") + "way";
  }

  if (vowels.test(str) === true) {
    letterFromStr.push(letterFromStr.splice(0,1));
   return  str = letterFromStr.join("") + "ay";
  }

   // console.log(letterFromStr);
  
    return str;
  }
  console.log(translatePigLatin("consonant"));