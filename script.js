// function indexOfIgnoreCase(s1, s2) {
//   // write your code here
// }

// // Please do not change the code below
// const s1 = prompt("Enter s1:");
// const s2 = prompt("Enter s2:");
// alert(indexOfIgnoreCase(s1, s2));
function indexOfIgnoreCase(s1, s2) {
  // Convert both strings to lowercase for case-insensitive comparison
  const str = s1.toLowerCase();
  const subStr = s2.toLowerCase();

  // Use indexOf to find the first occurrence of subStr in str
  return str.indexOf(subStr);
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
