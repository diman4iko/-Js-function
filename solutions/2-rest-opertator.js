export default function average(...nums) {
    if (nums.length === 0) {
      return null;
    }
  
    const sum = nums.reduce((total, num) => total + num);
    return sum / nums.length;
  }