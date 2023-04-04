export default function smallestDivisor(num) {
  if (num === 1) {
    return 1;
  }
  else {
    let i = 2;
  let ostatok;
  let k;
  while (i < num) {
  ostatok = num % k;
  if (ostatok == 0) {
    return k;
    break;
  }
  i = i + 1;
  k = k + 1;
}}

}