var coins = prompt('Ваш бюджет?'); //вопрос и ответ в премунную эту
var nameShop = prompt('Название вашего магазина?'); //вопрос и ответ в премунную эту
let time = 14;

let mainList = {
	budget: coins,
	nameShop: nameShop,
	arrOffers: [],
	employers: {},
	open: false
};

for(let i =0; i<5; i++){
	let a = prompt('Какой тип товаров будем продавать?'); 
	

	if((typeof(a)) === 'string' && a != '' && a.length < 50) {
		console.log('все верно!');
		mainList.arrOffers[i] = a;
	}else{
		alert('errror')
	}
}


if(time<0){
	console.log('такого не может быть');
}else if(time>8 && time<20){
	console.log('время работать');
	}else if(time<24){
		console.log('слишком поздно');
		}else{
			console.log('в сутках 24 часа');
		};

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
