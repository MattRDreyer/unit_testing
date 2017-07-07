function hangman_lite(word, letter) {
     var pos = word.indexOf(letter);

     // loop searching for specific character (letter) and count within a given string (Word)
     var count = 0;
     while (pos !== -1) {
          pos = word.indexOf(letter, pos + 1);
          count++;

     }
     return count;
}

     module.exports = hangman_lite;
