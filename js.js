// Zadacha 1
let firstName = "Daniyar";
let lastName = "Nurlan";
let age = 25;

console.log(`Меня зовут ${firstName} ${lastName}, и мне ${age} лет`);


// Zadacha 2
let city = "Астана";

console.log("Я родом из города " + city);


//Zadacha 3
let password = "mySecurePassword";
let hasAccess = password !== "";

console.log(password);
console.log(hasAccess);


// Zadacha 4
let isMember = false;
let isMemberString = isMember.toString();

console.log(isMemberString);
console.log(typeof isMemberString);


// Zadacha 5
let cartItems = 0;
let isCartEmpty = Boolean(cartItems);

console.log(isCartEmpty);
// Объяснение:
// Переменная `cartItems` равна 0. При преобразовании числа 0 в логическое значение оно становится `false`.
// Это означает, что корзина считается пустой.


// Zadacha 6
let averageScore = 89.75695;
averageScore = Number(averageScore.toFixed(1));

console.log(averageScore);


//Zadacha 7
let greetingMessage = "      Приветствуем вас в мире программирования!        ";

let trimmedMessage = greetingMessage.trim();
console.log(trimmedMessage);

let upperCaseMessage = trimmedMessage.toUpperCase();
console.log(upperCaseMessage);

let containsProgramming = trimmedMessage.includes("программирования");
console.log(containsProgramming);

