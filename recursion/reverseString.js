function reverseStringIterative(str) {
    let response = ''
    for (let i = str.length - 1; i >= 0; i--) {
        response += str[i]
    }

    return response
}

function reverseStringRecursive(str) {
    if (!str) return ''
    return str.split('').pop() + reverseStringRecursive(str.substring(0, str.length - 1))
}

function reverseStringRecursiveTwo(str) {
    let arrayStr = str.split("");
    let reversedArray = [];
    //We are using closure here so that we don't add the above variables to the global scope.
    function addToArray(array) {

        if (array.length > 0) {
            reversedArray.push(array.pop());
            addToArray(array);
        }
        return;
    }
    addToArray(arrayStr);
    return reversedArray.join("");
}

function reverseStringRecursiveThree(str) {
  if (str === "") {
    return "";
  } else {
    return reverseStringRecursive(str.substr(1)) + str.charAt(0);
  }
}

console.log(reverseStringIterative('yoyo mastery'))
console.log(reverseStringRecursive('yoyo mastery'))
console.log(reverseStringRecursiveTwo('yoyo mastery'))
console.log(reverseStringRecursiveThree('yoyo mastery'))
//should return: 'yretsam oyoy'