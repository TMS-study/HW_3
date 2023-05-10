// Task 1
let x = 20;
let y = 58;
let z = 42;

console.log(x + y + z);

// Task 2
const second = 60;
const minute = 60;
const hour = 24;
const day = 365;

let myAgeSecond = (day * 33) * hour * minute * second;

console.log(myAgeSecond);

// Task 3
let count: number = 42;
let userName: string = '42';

console.log(typeof String(count), typeof +userName);
console.log(typeof count.toString(), typeof Number(userName));
console.log(typeof `${count}`, typeof parseInt(userName));

// Task 4
let a = 1
let b = 2
let c = "белых медведей"

console.log(`${a}${b} ${c}`);
console.log(String(a) + String(b) + ' ' + c);

// Task 5
const aa = 'доступ'; 
const bb = 'морпех';
const cc = 'наледь';
const dd = 'попрек';
const ee = 'рубило';

let lengthWords = aa + bb + cc + dd + ee;

console.log(lengthWords.length);

// Task 6
const text: string = 'Hello';
const amount: number = 60;
const accept: boolean = true;

console.log(`Variable: ${text} have type: type variable ${typeof text}`);
console.log(`Variable: ${amount} have type: type variable ${typeof amount}`);
console.log(`Variable: ${accept} have type: type variable ${typeof accept}`);

// Task 7
const g = 'true';
const h =  false;
const p =  17;
const w =  undefined;
const o =  null;

console.log(typeof g, typeof h, typeof p, typeof w, typeof o);

// Task 8
let height = 15
let width = 20
    if (height > width) {
        console.log(height);
    } else {
        console.log(width);
    }

// Task 9

for(let j = 1; j <= 20; j++) {
    if (j % 3 === 0){
        console.log(j);
    }
};

// Task 10
let key = true
let documents = true
let pen = true
let apple = false
let orange = true

let houldGoToWork = 'Идем на работу';
    if (key && documents && pen && (apple || orange)){
        console.log(houldGoToWork);
    } else {
        console.log('Возвращаемся домой');
    }


// Task 11
let numm = 60;
if (numm % 5 === 0 && numm % 3 === 0) {
    console.log('FizBuz');
} else if (numm % 3 === 0) {
    console.log('Buz');
} else if (numm % 5 === 0) {
    console.log('Fiz');
} else {
    console.log('error');
}

// Task 12
let age = 17;
if (age > 18) {
    console.log('Попей пивка');
} else if (age >= 16 && age <= 18) {
    console.log('Можешь выкурить сигаретку, только маме не говори');
} else {
    console.log('Пей колу');
}

// Task 13
let sideWorld = 'юг';
switch (sideWorld) {
case ('юг'):
console.log('на юг пойдешь счастье найдешь');
break;
case ('север'):
console.log('на север пойдешь много денег найдешь');
break;
case ('запад'):
console.log('на запад пойдешь верного друга найдешь');
break;
case ('восток'):
console.log('на восток пойдешь разработчиком станешь');
break;
default:
    console.log('Попробуйте еще раз');
}

// ADVANCED level
// Task 1
let a1 = 4;
let b1 = 3;
a1 = 3;
b1 = 4;

console.log(a1, b1);

// Task 2 
let num = Number(prompt('введите число', ''));

let num1 = Number(prompt('cколько отнять?', ''));
let num2 = Number(prompt('сколько прибавить?', ''));
let num3 = Number(prompt('на сколько умножить?', ''));
let num4 = Number(prompt('на сколько разделить?', ''));
let result = ((((num - num1) + num2) * num3) / num4);

console.log(`(((${num} - ${num1}) + ${num2}) * ${num3}) / ${num4} = ${result}`);

// Task 3


let resultt= '';
const maxLength = 7;

for(let i = 1; i < maxLength; i++){  
    for(let a = 0; a < i; a++){   
        resultt +='#'; }            
    resultt += '\n';                   
}
console.log(resultt);
