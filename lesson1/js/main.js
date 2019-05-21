var coins = prompt('Ваш бюджет?'); //вопрос и ответ в премунную эту
var nameShop = prompt('Название вашего магазина?'); //вопрос и ответ в премунную эту

	var quest1 = prompt('Какой тип товаров будем продавать?'); //вопрос и ответ в премунную эту
	var quest2 = prompt('Какой тип товаров будем продавать?');//вопрос и ответ в премунную эту
	var quest3 = prompt('Какой тип товаров будем продавать?');//вопрос и ответ в премунную эту

var shopGoods = [quest1, quest2, quest3] //закинул в архив переменные

console.log(shopGoods[2]) // проверил что переменные в архиве, именно переменные
console.log(coins); //просо вывел знчение в консоль
console.log(nameShop);//просо вывел знчение в консоль

alert(coins/30) //показал алерт где делю переменную на 30

var arrOffers = ['cat', 'dog', 'pig']; //создал архив
var employers = {}; //создал и наполнил объект  - obj

employers = {
	kass: 'Ivan',
	security: 'Jhon',
	director: 'DonOmar'
};

var mainList = {}; //создал и наполнил объект - obj

mainList = {
	coins: coins,
	nameShop: nameShop,
	arrOffers: arrOffers,
	employers: employers,
	open: true
};

console.log(mainList['arrOffers']); //вывел массив в консоль


//
//$ git commit -a -m "название комита" - пушу в мастер
//  git status     смотрю есть ли изменения
//  git push -u test master пушу в гит  где тест это название проекта а мастер ветка
