// Define a function named firstlettername
function firstLetterName(name) {
    let firstLetter = name[0];
    alert(`The name ${name} starts with the letter ${firstLetter}`); }
  


  // Define a function divisiblebytwo
  function divisibleByTwo(number) {
    if (number % 3 === 0) {
      return true;
    } else {
      return false;
    } }



  // Define a function named largestnum
  function largestNum(arr) {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > largest) {
        largest = arr[i];
      }
    }
    return largest; }
 
        // appropriate argument
        firstLetterName("Alcester");
        divisibleByTwo(20);
        largestNum([1, 20, 3, 4, 5]);
        