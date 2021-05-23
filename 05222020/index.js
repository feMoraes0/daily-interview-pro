function lengthOfLongestSubstring(string) {
  let auxiliar = "";
  let longest = "";

  string.split("").forEach((letter) => {
    if(auxiliar.indexOf(letter) === -1) {
      auxiliar = auxiliar.concat(letter);
    } else {
      if(auxiliar.length > longest.length) {
        longest = auxiliar;
      }
      auxiliar = "";
    }
  });

  return longest.length;
}

const solution = lengthOfLongestSubstring('abrkaabcdefghijjxxx');

console.log(solution);