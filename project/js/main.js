let money,
	nameShop,
	time, 
	price


function start() {
	money = prompt('Ваш бюджет?'); //вопрос и ответ в премунную эту
	while(isNaN(money)|| money == '' || money == null){ //проверяем на отмену, пустую строку и т.д
		money = prompt('Ваш бюджет?'); //вопрос и ответ в премунную эту
	}

	nameShop = prompt('Название вашего магазина?').toUpperCase(); //вопрос и ответ в премунную эту
	time = 14;
}

start();

let mainList = {
	budget: money,
	nameShop: nameShop,
	arrOffers: [],
	employers: {},
	open: false,
	discount: true
};

function chooseGoods() {
		for(let i =0; i<5; i++){
		let a = prompt('Какой тип товаров будем продавать?'); 
		

		if((typeof(a)) === 'string' && a != '' && a.length < 50) {
			console.log('все верно!');
			mainList.arrOffers[i] = a;
		}else{

			alert('errror')
			i = i - 1;
		}
	}
}
chooseGoods();

function workTime(time) {
	if(time<0){
		console.log('такого не может быть');
	}else if(time>8 && time<20){
		console.log('время работать');
		}else if(time<24){
			console.log('слишком поздно');
			}else{
				console.log('в сутках 24 часа');
			};
}
workTime(22);


//функиция определяющая скидку - ДЗ 3 урока
function sale(price){
	if (mainList.discount == true){
		price = price*0.8
		console.log(price)
	}
}

sale(5000);
//функция найма сотрудников - ДЗ 3й урок
function employers() {
	for (var a = 0; a <= 3; a++){
		mainList.employers[a] = prompt('Имя сотрудника ' + a);
	}
}

employers();

//вывожу дни недели - ДЗ 2го урока, не понялкак выводить
let today = 'ср'
let week = ['пн','вт','ср','чт','пт','сб','вс']

for(let f=0; f<week.length; f++){
	alert(week[f])
}


//mainList.arrOffers[0] = prompt('Какой тип товаров будем продавать?'); //вопрос и ответ в премунную эту
//mainList.arrOffers[1] = prompt('Какой тип товаров будем продавать?');//вопрос и ответ в премунную эту
//mainList.arrOffers[2] = prompt('Какой тип товаров будем продавать?');//вопрос и ответ в премунную эту

console.log(mainList); //вывел массив в консоль

//$ git commit -a -m "название комита" - пушу в мастер
//  git status     смотрю есть ли изменения
//  git push -u test master пушу в гит  где тест это название проекта а мастер ветка
