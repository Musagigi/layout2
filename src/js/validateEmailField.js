const formEmail = document.querySelector('.footerEmail__form')
const inputFieldEmail = formEmail.querySelector('.footerEmail__input')
const errFieldMessage = formEmail.querySelector('.errFieldMessage')
const regexpEmail = new RegExp('([A-zА-я])+([0-9\-_\+\.])*([A-zА-я0-9\-_\+\.])*@([A-zА-я])+([0-9\-_\+\.])*([A-zА-я0-9\-_\+\.])*[\.]([A-zА-я])+')


formEmail.addEventListener('submit', function (event) {
	console.log('test');
	if (!regexpEmail.test(inputFieldEmail.value)) {
		errFieldMessage.innerText = 'Введите корректный email'
		event.preventDefault()
	}

})

document.addEventListener('invalid', (function () {
	return function (event) {
		//prevent the browser from showing default error bubble / hint
		event.preventDefault();

	};
})(), true);
