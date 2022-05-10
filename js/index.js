const result = document.querySelector(".result");
const equal = document.querySelector("#equal");
const reset = document.querySelector("#ac");
let nums = Array.from(document.querySelectorAll(".num"));

for (let i = 0; i < nums.length; i++) {
  nums[i].addEventListener("click", insertNum);
  function insertNum() {
    result.value += nums[i].value;
  }
}

equal.addEventListener("click", calcResult);
function calcResult() {
  if (result.value.includes("+")) {
    let x = result.value.split("+");
    result.value = +x[0] + +x[1];
  } else if (result.value.includes("-")) {
    let x = result.value.split("-");
    result.value = +x[0] - +x[1];
  } else if (result.value.includes("*")) {
    let x = result.value.split("*");
    result.value = +x[0] * +x[1];
  } else if (result.value.includes("/")) {
    let x = result.value.split("/");
    result.value = +x[0] / +x[1];
  }
}

reset.addEventListener("click", ()=> result.value = "")

// we call this fun from html(hi(this)), then we grab its value to reassign the parameter
// then, no need for queryAll and forLoop.
// function hi(x){
//   result.value += x.value
// }