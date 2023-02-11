function multiplicationTable(number) {
    var listp = document.getElementById('result');
    listp.innerHTML = '';
    for ( index=1 ; index <=10 ; index++ ) {
        calc = number*index
        var ul=document.createElement('ul');
        var li=document.createElement('li');
        var textnode = document.createTextNode(`${number} * ${index} = ${calc}`);    
        li.appendChild(textnode);
        ul.appendChild(li);                                 
        listp.appendChild(ul);
    }
};

function alert() {
    var listp = document.getElementById('result');
    listp.innerHTML = 'Somente valores de Um a Dez são válidos!'
}

function checkValue() {
    var number = document.getElementById('inputNumber').value;
    number > 0 && number <=10 
        ? multiplicationTable(number)
        : alert()
}