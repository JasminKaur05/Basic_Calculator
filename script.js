document.addEventListener("DOMContentLoaded", function () {
  let display = document.getElementById("display");

  window.addToDisplay = function (value) {
    display.value += value;
  };

  window.clearDisplay = function () {
    display.value = "";
  };

  window.calculate = function () {
    try {
      display.value = eval(display.value);
    } catch (e) {
      display.value = "Error";
    }
  };
});
