var $form = document.querySelector('#form');
var $fistName = document.querySelector('#fistName');
var $lastName = document.querySelector('#lastName');
var $email = document.querySelector('#email');
var $password = document.querySelector('#password');
var $email = document.querySelector('#email');
var $button = document.querySelector('#button');
var $eye = document.querySelector('#eye');
var $error_fist = document.querySelector('#error_fist');
var $error_last = document.querySelector('#error_last');
var $email_error = document.querySelector('#email_error');
var $root = document.querySelector('#root');
var $ulEnd = document.getElementById('ulEnd')
var $liItem = document.querySelector('.liItem')

$eye.addEventListener('click', function () {
    if ($password.type === 'password') {
        $password.type = 'text'
        $eye.textContent = '( ochiq )'
    } else {
        $password.type = 'password'
        $eye.textContent = '()'
    }
})

$fistName.addEventListener('input', function (e) {
    var rezult = e.target.value;
    if (rezult.length < 4) {
        $error_fist.textContent = 'Fast Name cannot be empty !'
    } else if (rezult.length >= 4) {
        $error_fist.textContent = ''
    } else {
        $error_fist.textContent = 'xato'
    }

});

$lastName.addEventListener('input', function (e) {
    var rezultLast = e.target.value;
    if (rezultLast.length < 4) {
        $error_last.textContent = 'Last Name cannot be empty !'
    } else if (rezultLast.length >= 4) {
        $error_last.textContent = ''
    } else {
        $error_last.textContent = 'xato'
    }

});


$email.addEventListener('input', function (e) {
    var rezultLast = e.target.value;
    if (rezultLast.length < 4) {
        $email_error.textContent = 'Look like this is not an email !'
    } else if (rezultLast.length >= 4) {
        $email_error.textContent = ''
    } else {
        $email_error.textContent = 'xato'
    }
});

let rezultEnd = [];

function rezultFn(e) {
    e.preventDefault();

    let rezultName = $fistName.value;
    let rezultLast = $lastName.value;
    let rezultEmail = $email.value;
    let rezultpassword = $password.value;

    let user = {
        name: rezultName,
        last: rezultLast,
        email: rezultEmail,
        password: rezultpassword,
    }

    rezultEnd.push(user);

    $fistName.value = '';
    $lastName.value = '';
    $email.value = '';
    $password.value = '';

    
    console.log(rezultEnd);

    rezultBrz();
}

$form.addEventListener('submit', rezultFn);

function rezultBrz() {
    $ulEnd.innerHTML = null; 
    for (let i = 0; i < rezultEnd.length; i++) {

        let rezutList = document.createElement("li");
         rezutList.className = "liItem";

        let rezultP = document.createElement("p");
        rezultP.textContent = rezultEnd[i].name;
        rezutList.append(rezultP);


        let rezultLast = document.createElement("p");
        rezultLast.textContent = rezultEnd[i].last;
        rezutList.append(rezultLast);

        let rezultEmail = document.createElement("p");
        rezultEmail.textContent = rezultEnd[i].email;
        rezutList.append(rezultEmail);

        let rezultpassword = document.createElement("p");
        rezultpassword.textContent = rezultEnd[i].password;
        rezutList.append(rezultpassword);

        $ulEnd.append(rezutList);
    }
}










