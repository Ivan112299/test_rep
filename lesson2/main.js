let num = 53;

// условный оператор
if(4*2 == 8*1){
	console.log('верно')
}else{
	console.log('неверно')
}


//влоденный условный оператор
if(num < 49){
	console.log('неверно')
}else if(num > 100){
	console.log('неверно')
	}else{
		console.log('верно')
	}


//сокращенная запись вложенного оператора
(num == 50)? console.log('верно!') : console.log('неверно!!') 


//оператор свич - переключение, проверяем нескольок условий
switch (num){
	case 49:
		console.log('мало');
		break;
	case 50:
		console.log('в точку');
		break;
	case 53:
		console.log('много');
		break;
}

// оператор предусловия
while(num < 55) {
	console.log(num);
	num++;
}

//опретор с постусловием
do{
	console.log(num)
	num++;
}while(num < 55)



// цикл обыкновенный
for (let i=0; i<8; i++){
	console.log(i);
}

//$ git commit -a -m "название комита" - пушу в мастер
//  git status     смотрю есть ли изменения
//  git push -u test master пушу в гит  где тест это название проекта а мастер ветка