function multiplicationTable() {
    var number = document.getElementById('inputNumber').value;
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