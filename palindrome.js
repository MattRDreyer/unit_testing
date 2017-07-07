function palindrome(word){

palArray = word.split("");
let reversed = palArray.reverse();
let unglue = reversed.join("");

if (word == unglue){
return true
}else{
  return false
}
}

module.exports = palindrome;
