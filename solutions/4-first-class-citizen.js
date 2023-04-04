const run = (text) => {
    // BEGIN
    function takeLast(str, n) {
      if (str === '' || str.length < n) {
        return null;
      }
      const reversed = str.split('').reverse().join('');
      return reversed.slice(0, n);
    }
    // END
  
    return takeLast(text, 4);
  };
  
export default run;