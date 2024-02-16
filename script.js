
let string = '', number = '';
let ans = 0, flag = 0, prevChar = '+';
function addToCalculationn(input) {
    if (input === '+' || input === '-' || input === '*' || input === '/') {

        if (prevChar === '+') {
            ans += Number(number);
        }
        else if (prevChar === '-') {
            ans -= Number(number);
        }
        else if (prevChar == '*') {
            ans *= Number(number);
        }
        else if (prevChar == '/') {
            ans /= Number(number);
        }
        // console.log(`ans = ${ans}`);
        prevChar = input;
        number = '';
    }
    else if (input === '=') {
        console.log(`number = ${number}`);
        if (prevChar === '+') {
            ans += Number(number);
        }
        else if (prevChar === '-') {
            ans -= Number(number);
        }
        else if (prevChar == '*') {
            ans *= Number(number);
        }
        else if (prevChar == '/') {
            ans /= Number(number);
        }

        document.querySelector('.input-box').innerHTML = string;
        document.querySelector('.result').innerHTML = ans;

        string = '';
        number = '';
        ans = 0;
        prevChar = '+';
    }
    else if(input === 'clear'){
        document.querySelector('.input-box').innerHTML = '';
        document.querySelector('.result').innerHTML = '';
        string = '';
        number = '';
        ans = 0;
        prevChar = '+';
    }
    else {
        number += input;
    }
    if (input !== '=' && input !== 'clear') {
        string += input;
        document.querySelector('.input-box').innerHTML = string;
        console.log(document.querySelector('.input-box').innerHTML);
    }
}