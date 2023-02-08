let a = ''; // first number
let b = ''; // second number
let sign = ''; // знак операции
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'X', '/'];

// screen
const out = document.querySelector('.calc-screen p');
 function clearAll() {
    a = ''; //first number and result
    b = ''; //second number
    sign = ''; //знак
    finish = false;
    out.textContent = 0;
 }

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
    // нажата не кнопка
    if(!event.target.classList.contains('btn')) return;
    // нажата кнопка clearAll AC
    if(event.target.classList.contains('ac')) return;

    out.textContent = '';
    // получаю нажатую кнопку
    const key = event.target.textContent;

    // если нажата кнопка 0-9 или ю
    if (digit.includes(key)) {
        if (b === '' && sign === '') {
            a += key;
            out.textContent = a;
        }
        else if (a!== '' && b!== '' && finish) {
            b = key;
            finish = false;
            out.textContent = b;
        }
        else {
            b += key;
            out.textContent = b;
        }
        console.log(a, b, sign);
        return;
    }

    // если нажата кнопка + - Х /
    if (action.includes(key)) {
        sign = key;
        out.textContent = sign;
        return;
    }

    //если нажато =
    if (key === '=') {
        if (b === '') b = a;
        switch (sign) {
            case "+":
                    a = (+a) + (+b);
                    break;
            case "-":
                    a = a - b;
                    break;
            case "X":
                    a = a * b;
                    break;
            case "/":
                    if (b === '0') {
                        out.textContent = 'Ошибка';
                        a = '';
                        b = '';
                        sign = '';
                        return;
                    }
                    a = a / b;
                    break;
        }
        finish = true;
        out.textContent = a;
        console.log(a, b, sign);
    }
}