//math operations

console.log(10 + 4);
console.log(10 - 4);
console.log(10 * 4);
console.log(10 / 4);
console.log(10 % 4); //при разделении 10 на 4 оставшаяся цифра которую нельзя поделить будет в итоге Remainder: 2
console.log(10 % 3); //здесь remainder будет 1, цифра которая остаётся после разделения на цифру указанную после %
// 4 5 6 называется integer
// 4.5  называется floating points or floats

console.log((10 + 3 - 5) * 10);

let result = (10 + 3 - 5) * 10;
result = 10 * 4;
result = result + 1;
result++; //более короткая форма написания верхнего кода result = result + 1;

result = result - 1;
result--; //более короткая форма написания верхнего кода  result = result - 1;

result = result + 5;
result += 5; //более короткая форма написания верхнего кода  result = result + 5;

result = result - 5;
result -= 5; //более короткая форма написания верхнего кода  result = result - 5;

result = result + 5;
result += 5; //более короткая форма написания верхнего кода  result = result + 5;

result = result * 5;
result *= 5; //более короткая форма написания верхнего кода  result = result * 5;

result = result / 5;
result /= 5; //более короткая форма написания верхнего кода  result = result + 5;

console.log(result);

console.log('Zhandos' + ' ' + 'Sembayev'); //strings тексты можно добавлять друг другу используя +! остальные -*/% нельзя использовать!

//когда добавляешь string + string это называется string concatenation

let userName = 'Zhandos';
console.log(userName.length); //таким способом можно определить сколько букв в слове или какова длина в буквах определенного слова
console.log(userName.toLocaleUpperCase());

let hobbies = ['Sports', 'Cooking'];
console.log(hobbies.length);
