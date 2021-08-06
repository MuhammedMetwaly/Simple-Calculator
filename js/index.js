window.onload = function () {
  // main initalize
  let previous = null;
  const numbers = document.querySelectorAll(".numbers");
  const previousElm = document.getElementById("previous");
  const currentElm = document.getElementById("current");
  const operators = document.querySelectorAll(".operator");
  const clear = document.querySelector(".clear");
  const clearAll = document.querySelector(".clear_all");

  // print out clicked number
  numbers.forEach((e, i) => {
    e.addEventListener("click", () => {
      if (e.innerHTML == "=") {
        currentElm.innerHTML = eval(previous);
      } else {
        getInput(e);
      }
    });
  });

  operators.forEach((e, i) => {
    e.addEventListener("click", () => {
      getInput(e);
    });
  });

  const getInput = (input) => {
    const number = input.innerHTML;
    if (previous) {
      previous += number;
    } else {
      previous = number;
    }
    previousElm.innerHTML = previous;
  };

  // delete function
  clear.addEventListener("click", () => {
    if (previous.length > 1) {
      previous = previous.substring(0, previous.length - 1);
      previousElm.innerHTML = previous;
      currentElm.innerHTML = eval(previous);
    } else {
      previous = null;
      previousElm.innerHTML = "";
      currentElm.innerHTML = 0;
    }
  });

  // remove all
  clearAll.addEventListener("click", () => {
    previous = "";
    previousElm.innerHTML = "";
    currentElm.innerHTML = 0;
  });
};
