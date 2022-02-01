let age = 32;
let userName = 'Zhandos';
let hobbies = ['Sports', 'Reading', 'Cooking'];
let job = {
  title: 'Developer',
  place: 'New York',
  salary: 50000,
};

let totalAdultYears;

function calculateAdultYears(userAge) {
  return userAge - 18; //сюда добавляем код, что делает функция! это операция которую проводит функция
  //return используется чтобы получить результат функции, также с помощью return можно использовать функцию в разных местах,
  //например создать переменную задать ему данные этой функции, тогда можно будет использовать функцию!
  //параметры функции это как переменные которые работают только внутри функции
  //также когда вызываешь функцию в параметры можно добавлять переменные невходящие в функцию Например calculateAdultYears(age)
  // в этом случае age это переменная не входящая в функцию, но при вызове можно передавать значение переменной
}

totalAdultYears = calculateAdultYears(age);
console.log(totalAdultYears);

age = 45;
totalAdultYears = calculateAdultYears(age);

console.log(totalAdultYears);

let person = {
  name: 'Max', //Называется property
  greet() {
    // Называется method работает и используется как функция, когда добавляешь функцию в object, функция начинается с имени!!!
    // слово function писать нельзя!!!!
    console.log('Hello');
  },
};

person.greet();

//console.log используется чтобы выводить результаты на консоль в developer tools в google chrome,
// это было сделано для замены функции alert
