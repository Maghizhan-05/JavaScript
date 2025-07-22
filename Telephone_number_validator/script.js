const input = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultDiv = document.getElementById("results-div");

const isValidUSPhoneNumber = (number) => {
  const regex = /^(1\s?)?(\(\d{3}\)|\d{3})([-\s]?)\d{3}([-\s]?)\d{4}$/;
  return regex.test(number);
};

checkBtn.addEventListener("click", () => {
  const value = input.value.trim();
  if (value === "") {
    alert("Please provide a phone number");
    return;
  }

  const onlyNumbers = value.replace(/[^\d]/g, "");

  if (
    isValidUSPhoneNumber(value) &&
    (onlyNumbers.length === 10 || (onlyNumbers.length === 11 && onlyNumbers[0] === '1'))
  ) {
    resultDiv.textContent = `Valid US number: ${value}`;
  } else {
    resultDiv.textContent = `Invalid US number: ${value}`;
  }
});

clearBtn.addEventListener("click", () => {
  input.value = "";
  resultDiv.textContent = "";
});
