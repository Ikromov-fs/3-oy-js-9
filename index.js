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
// var $error_img = document.querySelector('#error_img');

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
        // displaySettting = 'none'
    } else if (rezultLast.length >= 4) {
        // displaySettting = 'none'
        $error_last.textContent = ''
    } else {
        $error_last.textContent = 'xato'
    }
    
});


$email.addEventListener('input', function (e) {
    var rezultLast = e.target.value;
    // var added_item_button = document.getElementById('error_img');
    if (rezultLast.length < 4) {
        // added_item_button.style.display = 'block';
        $email_error.textContent = 'Look like this is not an email !'
    } else if (rezultLast.length >= 4) {
        $email_error.textContent = ''
        // added_item_button.style.display = 'none';
    } else {
        $email_error.textContent = 'xato'
    }
    
    
});

let fist = [""];

function fistName(array) {
    $root.innerHTML = '';
    for (let i = 0; i < array.length; i++) {
        let rezulName = document.createElement("ul");
        rezulName.textContent = array[i];

        $root.append(rezulName);
    }
}

fistName(fist);

function onClick() {
    fist.push($fistName.value);
    console.log(fist);
    fistName(fist);

    $fistName.value = ''
}

$button.addEventListener("click", onClick);


$button.addEventListener("click", function(e){
    e.preventDefault();
    $email.value = "";
    $lastName.value = "";
    $password.value = "";
});