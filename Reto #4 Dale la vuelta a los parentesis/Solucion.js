function decode(message) {
  const positions = [];
  let result = '';

  for (const char of message) {
    if (char === '(') {
      positions.push(result.length);
    } else if (char === ')') {
      const start = positions.pop();
      const reversed = result.slice(start).split('').reverse().join('');
      result = result.substring(0, start) + reversed;
    } else {
      result += char;
    }
  }
  return result;
}