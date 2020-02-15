/**
 * 1. A palindrome is a word that reads the same backward or forward.
Write a function that checks if a given word is a palindrome. Character case should be ignored.
 */

function isPalindrome(word) {
  if (!word) {
    return false;
  }
  const palindromeText = word
    .split('')
    .reverse()
    .join('')
    .toLowerCase();
  return word.toLowerCase() === palindromeText;
}

const word = 'Deleveled';
console.log(word, isPalindrome(word));
