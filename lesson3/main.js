function showFirstMessage(text){
	alert(text)
	let num = 20; //переменная не видна нигде кроме какв самой функции
 }

//замыкаие функции - это вся функция со всеми переменным даже за
//пределами функции (внешними переменными)

showFirstMessage('Hello World!')


//function declaration  - объявлена в потоке кода, можно вызвать до объявления
function calc(a,b){
	return a+b  // посте return функция прекращает свое действие
}
console.log(calc(3,4));


//function exspression - функциональное выражение, нельзя вызвать заранее. записана в пеменную
var calc = function(a,b){
	return a+b 
}

//стрелочная функция - тоже function expression
//let calc = (a,b) => a+b - что то не работает

//свойства
let str = 'te5st';
console.log(str.length)

//методы
let str_2 = 'Test';
let str_3 = '12.23';
console.log(str_2.toUpperCase()); //все буквы вернула большие в консоли
console.log(Math.round(str_3)); //округление


//callback функции - не выполняем функцию пока не выполнится другаяf
//задаем функцию как параметр другой функции

function learnJS(lang,callback) {
	console.log('я учу '+ lang);
	callback()
}
learnJS('C++', function(){
	console.log('я прошел 3 урок')
});


//или так:
learnJS('C++', done);
function done(){
	console.log(' я прошел 3 урок!')
}

