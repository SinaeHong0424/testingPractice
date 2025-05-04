export function capitalize(string) {
    if (!string) {
      return '';
    }
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  export function reverseString(string) {
    if (!string) {
      return '';
    }
    return string.split('').reverse().join('');
  }
  
  export const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    divide: (a, b) => {
      if (b === 0) {
        return undefined;
      }
      return a / b;
    },
    multiply: (a, b) => a * b,
  };
  
  export function caesarCipher(string, shift) {
    if (!string) {
      return '';
    }
  
    let result = '';
    for (let i = 0; i < string.length; i++) {
      let char = string[i];
      if (char.match(/[a-z]/i)) {
        const isUpperCase = char === char.toUpperCase();
        const offset = isUpperCase ? 65 : 97; // 'A' 또는 'a'의 ASCII 코드
        let shiftedCode = ((char.charCodeAt(0) - offset + shift) % 26 + 26) % 26 + offset;
        char = String.fromCharCode(shiftedCode);
      }
      result += char;
    }
    return result;
  }
  
  export function analyzeArray(array) {
    if (array.length === 0) {
      return {
        average: NaN,
        min: Infinity,
        max: -Infinity,
        length: 0,
      };
    }
  
    const sum = array.reduce((acc, num) => acc + num, 0);
    const average = sum / array.length;
    const min = Math.min(...array);
    const max = Math.max(...array);
    const length = array.length;
  
    return {
      average,
      min,
      max,
      length,
    };
  }