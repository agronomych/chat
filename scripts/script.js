function sendMessage() {
    var message = document.getElementById('message');
    var name = document.getElementById('name');
    if (!message.value) return;
    var chat = document.getElementById('chat');
    var text = '<p><strong>' + name.value+'</strong>: '+message.value+'</p>';
    chat.innerHTML = text+chat.innerHTML;
    message.value = '';
    message.focus();
}

function changeName() {
    var name = document.getElementById('name-input');
    if (!name.value) return;
    var label = document.getElementById('name');
    label.innerHTML = name.value;
}

function init() {

    var setFunction = document.getElementById('change-name');
    setFunction.onclick = changeName;
    setFunction = document.getElementById('send-button');
    setFunction.onclick = sendMessage;
}
window.onload = init;