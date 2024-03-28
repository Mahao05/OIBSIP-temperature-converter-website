const celsiusFiield = document.querySelector("#celsius");
const degree = document.querySelector("#degree");
const convertButton = document.querySelector("#convert-button");
const tempType = document.querySelector("#temp-type");

window.addEventListener("load", () => {
  degree.value = "";
  celsiusFiield.innerHTML = "";
});

convertButton.addEventListener("click", () => {
  event.preventDefault();
  convertToCelsius();

  convertButton.innerHTML =
    "<span><i class='fa-solid fa-spinner fa-spin'></i>Converting..</span>";
  setTimeout(() => {
    convertButton.innerHTML = "<span>Convert</span>";
  }, 1000);
});

function convertToCelsius() {
  let inputValue = degree.value;

  setTimeout(() => {
    if (tempType.value === "fahrenheit") {
      const fahrenheitToCelcius = (inputValue - 32) * (5 / 9);
      celsiusFiield.innerHTML = `${fahrenheitToCelcius.toFixed(3)} °C`;
    } else if (tempType.value === "kelvin") {
      const kelvinToCelsius = inputValue - 273.15;
      celsiusFiield.innerHTML = `${kelvinToCelsius.toFixed(3)}°C`;
    }
  }, 1200);
}
