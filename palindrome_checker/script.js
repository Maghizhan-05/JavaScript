const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result")

checkBtn.addEventListener('click', ()=>{
  const userInput = textInput.value;
  if(!userInput){
    alert('Please input a value')
    return;
  }
  const normalized = userInput.toLowerCase().replace(/[^a-z0-9]/gi,'');

  const reversed = normalized.split('').reverse().join('')

  if(normalized === reversed){
    result.textContent = `${userInput} is a palindrome`;
  }else{
    result.textContent = `${userInput} is not a palindrome`;
  }
})