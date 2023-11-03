function scramble() {
    // Get the values of the input fields
    var text = document.getElementById("text").value;
    var words = document.getElementById("words").value.split(" ");
    
    // Split the text into an array of words
    var wordsArray = text.split(" ");
    
    // Loop through each word in the array
    for (var i = 0; i < wordsArray.length; i++) {
      
      // Check if this word is in our list of words to scramble
      if (words.indexOf(wordsArray[i]) !== -1) {
        
        // Replace this word with asterisks
        wordsArray[i] = "****";
        
      }
      
    }
    
    // Join the array back into a string
    var scrambledText = wordsArray.join(" ");
    
    // Set the innerHTML of our output element to the scrambled text
    document.getElementById("output").innerHTML = scrambledText;
    
    // Automatically reset after 30 seconds
    setTimeout(reset, 30000);
  }
  
  function reset() {
    document.getElementById("text").value = ""; // Clear the 'text' input field
    document.getElementById("words").value = ""; // Clear the 'words' input field
    document.getElementById("output").innerHTML = ""; // Clear the output div
  }
