import "./styles.css";

function getMaxSubSum(arr){

let sum = 0;
let comp = 0;   

for (let i = 0; i <= arr.length; i++){
  if (arr[i] > 0) {
    sum += +arr[i];
  } else {
    if (sum > comp) {comp = sum};
    sum = 0;
  }
 }  
return comp;
}

console.log(getMaxSubSum([-1, 2, 3, -9])); // = 5  (сумма выделенных)
console.log(getMaxSubSum([2, -1, 2, 3, -9])); // = 6
console.log(getMaxSubSum([-1, 2, 3, -9, 11])); // = 11
console.log(getMaxSubSum([-2, -1, 1, 2])); // = 3
console.log(getMaxSubSum([100, -9, 2, -3, 5])); // = 100
console.log(getMaxSubSum([1, 2, 3])); // = 6 


document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;