const numberInput = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const result = document.getElementById('output');


const decimalToRoman = (input)=>{
  const val_to_roman = [[1000,"M"],[900,"CM"],[500,"D"],[400,"CD"],[100,"C"],[90,"XC"],[50,"L"],[40,"XL"],[10,"X"],[9,"IX"],[5,"V"],[4,"IV"],[1,"I"]]

  let roman = '';
  for(const [val,symbol] of val_to_roman){
    while(input >= val){
      roman += symbol;
      input -= val
    }
  }
  return roman;
}

const checkUserInput = () =>{
  const inputInt = parseInt(numberInput.value);

  if (!numberInput.value || isNaN(inputInt)) {
    result.textContent = "Please enter a valid number";
    return;
  }else if(inputInt < 0){
    result.textContent = "Please enter a number greater than or equal to 1";
  }else if(inputInt >= 4000){
    result.textContent = "Please enter a number less than or equal to 3999";
  }else{

  result.textContent = decimalToRoman(numberInput.value);
  numberInput.value = '';}
};


convertBtn.addEventListener("click", checkUserInput);

numberInput.addEventListener("keydown", (e)=>{
  if(e.key === 'Enter'){
    checkUserInput();
  }
})