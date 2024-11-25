var addTwoNumbers = function (l1, l2) {
  console.log("🚀 ~ file: App.test.js:2 ~ addTwoNumbers ~ l1:", l1);

  let carry = 0; 
  let arr = [];

  for (let i = 0; i < l1.length; i++) {
    let sum = l1[i] + l2[i] + carry;
    carry = Math.floor(sum / 10);  
    arr.push(sum % 10);            
  }

  if (carry > 0) {
    arr.push(carry);
  }

  console.log("🚀 ~ file: App.test.js:8 ~ addTwoNumbers ~ sum:", arr);
  return arr;
};
// Hàm cần kiểm thử
var addTwoNumbers = function (l1, l2) {
  let carry = 0;
  let arr = [];
  for (let i = 0; i < l1.length; i++) {
    let sum = l1[i] + l2[i] + carry;
    carry = Math.floor(sum / 10);
    arr.push(sum % 10);
  }
  if (carry > 0) {
    arr.push(carry);
  }
  return arr;
};
test('addTwoNumbers: [2, 4, 3] + [5, 6, 4] = [7, 0, 8]', () => {
  const result = addTwoNumbers([2, 4, 3], [5, 6, 4]);
  expect(result).toEqual([7, 0, 8]); 
});

addTwoNumbers([2, 4, 3], [5, 6, 4]); 
