
//Задание 1 - Решение 1
module.exports.funk1 = function (argumr) {
  let sum = 0;
  for (let key in argumr) {
  sum = sum + argumr[key];
  }
  return sum;
}

//Задание 1 - Решение 2
/*module.exports.funk1 = function (argumr) {
  let sum=0;
  let argus = [];
  argus = Object.values(argumr);
  for (i=0; i< argus.length; i++) {
  sum = sum + argus[i];
  }
  return sum;
}*/

//Задание 2
module.exports.funky = function (array) {
  let diller = (stuff=99) => {array.push(stuff); return array.join(',');};
  return diller();
	}

//Задание 3
let stuff = {
  firstName: 'Ivan',
  lastName: 'Ivanov',
  birthYear: 2000,
};

function slasher(stuff) {
  let anketa = {
    ...stuff,
    fullName: stuff.firstName + " " + stuff.lastName,
    age: 2019 - stuff.birthYear,
  };
  return anketa;
}

