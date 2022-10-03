let textArea = document.querySelector("#text-area");
let result = document.querySelector(".count-area");

function counter(res1) {
  if (res1 < 0) {
    return;
  }
  result.textContent = res1;
  res1 = res1 - 1;

  setTimeout(function () {
    counter(res1);
  }, 1000);
}

function startCount() {
  let res1 = textArea.value;
  counter(res1);
}