function printURL(cellNumber, textMessage) {
    const urlSendMsg = document.getElementById("urlSendMsg");
    const url = (`https://api.whatsapp.com/send?phone=${cellNumber}&text=${textMessage}`);
    urlSendMsg.innerHTML = (`<a href="${url}">${url}</a>`)
};

function makeUrl() {
    const cellNumber = document.getElementById('cellNumber').value;
    const textMessage = document.getElementById('textMessage').value;
    const returnMessage = textMessage.replace(/ /g, '%20');
    printURL(cellNumber, returnMessage);
};