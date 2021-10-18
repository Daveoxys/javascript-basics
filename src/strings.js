function sayHello (name) {
  // your code here
  return('Hello, ' + name + '!');
}
sayHello('world');
sayHello('MCR Codes');
sayHello('fsghjdfkhgf');


function uppercase (upper) {
  // your code here
  return (upper.toUpperCase());
}
uppercase('abc.');
uppercase('def');
uppercase('ghi');


function lowercase (lower) {
  // your code here
  return (lower.toLowerCase());
}
lowercase('ABC');
lowercase('DEF');
lowercase('GHI');


function countCharacters(string) {
  return string.length;
}

function firstCharacter (firstChar) {
  return firstChar.charAt(0);

};

function firstCharacters (string, n) {
  // your code here
  return string.substring(0,4);
  return string.substring(0,2);
};

module.exports = {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters
};
