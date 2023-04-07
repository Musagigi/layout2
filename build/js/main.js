const previewVideo = document.querySelector('.previewVideo video')
const btnPlayVideo = document.querySelector('.previewVideo__play')

btnPlayVideo.addEventListener('click', function () {

	btnPlayVideo.classList.add('previewVideo__play_hidden')
	previewVideo.play()
	previewVideo.setAttribute('controls', 'controls')
})


const photo = document.querySelectorAll('.slider__photo')
const btnLeft = document.querySelector('.btnLeft')
const btnRight = document.querySelector('.btnRight')
let current = 0

btnLeft.addEventListener('click', function () {
	photo[current].classList.remove('slider__photo_show')
	current--

	console.log(current);
	if (current < 0) {
		current = photo.length - 1
	}
	photo[current].classList.add('slider__photo_show')
})

btnRight.addEventListener('click', function () {
	photo[current].classList.remove('slider__photo_show')

	current++
	console.log(current);
	if (current === photo.length) {
		current = 0
	}
	photo[current].classList.add('slider__photo_show')
})


const formEmail = document.querySelector('.footerEmail__form')
const inputFieldEmail = formEmail.querySelector('.footerEmail__input')
const errFieldMessage = formEmail.querySelector('.errFieldMessage')
const regexpEmail = new RegExp('([A-zА-я])+([0-9\-_\+\.])*([A-zА-я0-9\-_\+\.])*@([A-zА-я])+([0-9\-_\+\.])*([A-zА-я0-9\-_\+\.])*[\.]([A-zА-я])+')


formEmail.addEventListener('submit', function (event) {

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZXZpZXcuanMiLCJzbGlkZXIuanMiLCJ2YWxpZGF0ZUVtYWlsRmllbGQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwcmV2aWV3VmlkZW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJldmlld1ZpZGVvIHZpZGVvJylcbmNvbnN0IGJ0blBsYXlWaWRlbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmV2aWV3VmlkZW9fX3BsYXknKVxuXG5idG5QbGF5VmlkZW8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG5cblx0YnRuUGxheVZpZGVvLmNsYXNzTGlzdC5hZGQoJ3ByZXZpZXdWaWRlb19fcGxheV9oaWRkZW4nKVxuXHRwcmV2aWV3VmlkZW8ucGxheSgpXG5cdHByZXZpZXdWaWRlby5zZXRBdHRyaWJ1dGUoJ2NvbnRyb2xzJywgJ2NvbnRyb2xzJylcbn0pXG5cbiIsImNvbnN0IHBob3RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNsaWRlcl9fcGhvdG8nKVxuY29uc3QgYnRuTGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG5MZWZ0JylcbmNvbnN0IGJ0blJpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0blJpZ2h0JylcbmxldCBjdXJyZW50ID0gMFxuXG5idG5MZWZ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuXHRwaG90b1tjdXJyZW50XS5jbGFzc0xpc3QucmVtb3ZlKCdzbGlkZXJfX3Bob3RvX3Nob3cnKVxuXHRjdXJyZW50LS1cblxuXHRjb25zb2xlLmxvZyhjdXJyZW50KTtcblx0aWYgKGN1cnJlbnQgPCAwKSB7XG5cdFx0Y3VycmVudCA9IHBob3RvLmxlbmd0aCAtIDFcblx0fVxuXHRwaG90b1tjdXJyZW50XS5jbGFzc0xpc3QuYWRkKCdzbGlkZXJfX3Bob3RvX3Nob3cnKVxufSlcblxuYnRuUmlnaHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG5cdHBob3RvW2N1cnJlbnRdLmNsYXNzTGlzdC5yZW1vdmUoJ3NsaWRlcl9fcGhvdG9fc2hvdycpXG5cblx0Y3VycmVudCsrXG5cdGNvbnNvbGUubG9nKGN1cnJlbnQpO1xuXHRpZiAoY3VycmVudCA9PT0gcGhvdG8ubGVuZ3RoKSB7XG5cdFx0Y3VycmVudCA9IDBcblx0fVxuXHRwaG90b1tjdXJyZW50XS5jbGFzc0xpc3QuYWRkKCdzbGlkZXJfX3Bob3RvX3Nob3cnKVxufSlcblxuIiwiY29uc3QgZm9ybUVtYWlsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvb3RlckVtYWlsX19mb3JtJylcbmNvbnN0IGlucHV0RmllbGRFbWFpbCA9IGZvcm1FbWFpbC5xdWVyeVNlbGVjdG9yKCcuZm9vdGVyRW1haWxfX2lucHV0JylcbmNvbnN0IGVyckZpZWxkTWVzc2FnZSA9IGZvcm1FbWFpbC5xdWVyeVNlbGVjdG9yKCcuZXJyRmllbGRNZXNzYWdlJylcbmNvbnN0IHJlZ2V4cEVtYWlsID0gbmV3IFJlZ0V4cCgnKFtBLXrQkC3Rj10pKyhbMC05XFwtX1xcK1xcLl0pKihbQS160JAt0Y8wLTlcXC1fXFwrXFwuXSkqQChbQS160JAt0Y9dKSsoWzAtOVxcLV9cXCtcXC5dKSooW0EtetCQLdGPMC05XFwtX1xcK1xcLl0pKltcXC5dKFtBLXrQkC3Rj10pKycpXG5cblxuZm9ybUVtYWlsLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uIChldmVudCkge1xuXG5cdGlmICghcmVnZXhwRW1haWwudGVzdChpbnB1dEZpZWxkRW1haWwudmFsdWUpKSB7XG5cdFx0ZXJyRmllbGRNZXNzYWdlLmlubmVyVGV4dCA9ICfQktCy0LXQtNC40YLQtSDQutC+0YDRgNC10LrRgtC90YvQuSBlbWFpbCdcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cdH1cblxufSlcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaW52YWxpZCcsIChmdW5jdGlvbiAoKSB7XG5cdHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHQvL3ByZXZlbnQgdGhlIGJyb3dzZXIgZnJvbSBzaG93aW5nIGRlZmF1bHQgZXJyb3IgYnViYmxlIC8gaGludFxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0fTtcbn0pKCksIHRydWUpOyJdfQ==
