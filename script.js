let currentInput = '';
let currentOperation = null;
let previousInput = '';

function appendNumber(number) {
  currentInput += number;
  updateDisplay();
}

function setOperation(operation) {
  if (currentInput === '') return;

  if (previousInput !== '') {
    calculateResult(); // Если предыдущий ввод есть, вычисляем перед установкой новой операции
  }

  currentOperation = operation;
  previousInput = currentInput;
  currentInput = '';
  updateDisplay();
}

function calculateResult() {
  let result;
  const prev = parseFloat(previousInput);
  const curr = parseFloat(currentInput);

  if (isNaN(prev) || isNaN(curr)) return; // Если нет чисел для вычисления, ничего не делаем

  switch (currentOperation) {
    case '+':
      result = prev + curr;
      break;
    case '-':
      result = prev - curr;
      break;
    case '*':
      result = prev * curr;
      break;
    case '/':
      if (curr === 0) {
        result = 'Error'; // Обработка деления на ноль
      } else {
        result = prev / curr;
      }
      break;
    default:
      return; // Если операция не задана, ничего не делаем
  }

  currentInput = result.toString();
  currentOperation = null;
  previousInput = '';
  updateDisplay();
}

function clearDisplay() {
  currentInput = '';
  currentOperation = null;
  previousInput = '';
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('display').value = currentInput;
}