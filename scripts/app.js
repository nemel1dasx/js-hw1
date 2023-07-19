let name = prompt("Введите ваше имя:");

if (name) {
  alert("Ваше имя: " + name);
} else {
  alert("Вы не ввели свое имя");
}

let number1 = prompt("Введите первое число:");
let number2 = prompt("Введите второе число:");

let sum = parseFloat(number1) + parseFloat(number2);
alert("Сумма чисел: " + sum);

let age = prompt("Введите ваш возраст:");

if (age > 17) {
  alert("Добро пожаловать, " + name + "!");
} else {
  alert("Доступ закрыт");
}

let wantBlock = confirm("Хотите ввести название блока?");

if (wantBlock) {
  let blockName = prompt("Введите название блока:");

  if (blockName) {
    let elementName = prompt("Введите название элемента:");

    if (elementName) {
      alert("Вы ввели: " + blockName + "__" + elementName);
    } else {
      alert("Программа завершена. Не введено название элемента.");
    }
  } else {
    alert("Программа завершена. Не введено название блока.");
  }
} else {
  alert("Программа завершена. Вы отказались ввести название блока.");
}

let Firstnumber = prompt("Введите первое число:");
let Secondnumber = prompt("Введите второе число:");
let operator = prompt("Введите оператор (+, -, *, /):");

let result;

switch (operator) {
  case "+":
    result = parseFloat(Firstnumber) + parseFloat(Secondnumber);
    break;
  case "-":
    result = parseFloat(Firstnumber) - parseFloat(Secondnumber);
    break;
  case "*":
    result = parseFloat(Firstnumber) * parseFloat(Secondnumber);
    break;
  case "/":
    result = parseFloat(Firstnumber) / parseFloat(Secondnumber);
    break;
  default:
    result = "Некорректный оператор";
}

alert("Результат: " + result);
