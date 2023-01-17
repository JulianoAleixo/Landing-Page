function sendForm() {
    firstName = document.querySelector('#first-name').value;
    lastName = document.querySelector('#last-name').value;
    email = document.querySelector('#email').value;
    msg = document.querySelector('#message').value;
    btn = document.querySelector('.button').value;
    console.log(`O meu nome é ${firstName} ${lastName}, meu email é ${email} e escrevi isso sobre você: ${msg}.`);

    if (firstName.length == 0) {
        window.alert("[ERRO] Digite seu nome.");
    }
    else if (lastName.length == 0) {
        window.alert("[ERRO] Digite seu sobrenome.");
    } else if (email.length == 0){
        window.alert("[ERRO] Digite seu sobrenome.");
    }

}
