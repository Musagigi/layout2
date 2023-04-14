const burger = document.querySelector('.burger')
const middleLine = document.querySelector('.middleLine')
const navigateList = document.querySelector('.navigate')

burger.addEventListener('click', function () {
	navigateList.classList.toggle('navigate_active')
	middleLine.classList.toggle('middleLine_active')
	burger.classList.toggle('burger_transparent')
})

const searchBtn = document.querySelector('.dropdown__searchBtn')
const searchField = document.querySelector('.dropdown__searchField')

searchBtn.addEventListener('click', function () {
	searchField.classList.toggle('dropdown__searchField_active')
})
const previewVideo = document.querySelector('.preview video')
const btnPlayVideo = document.querySelector('.preview__play')

btnPlayVideo.addEventListener('click', function () {

	btnPlayVideo.classList.add('preview__play_hidden')
	previewVideo.play()
	previewVideo.setAttribute('controls', 'controls')
})


// const slider = document.querySelector('.slider')
// const photo = document.querySelectorAll('.slider__photo')
// const btnLeft = document.querySelector('.sliderBtn__left')
// const btnRight = document.querySelector('.sliderBtn__right')
// let current = 0

// slider.addEventListener('contextmenu', cancelEvent)
// slider.addEventListener('mousedown', cancelEvent)

// function cancelEvent(event) {
// 	event.preventDefault()
// }

// btnLeft.addEventListener('click', function () {
// 	photo[current].classList.remove('slider__photo_show')

// 	current--

// 	if (current < 0) {
// 		current = photo.length - 1
// 	}
// 	photo[current].classList.add('slider__photo_show')
// })

// btnRight.addEventListener('click', function () {
// 	photo[current].classList.remove('slider__photo_show')

// 	current++

// 	if (current === photo.length) {
// 		current = 0
// 	}
// 	photo[current].classList.add('slider__photo_show')
// })


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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlck1lbnUuanMiLCJwcmV2aWV3LmpzIiwic2xpZGVyLmpzIiwidmFsaWRhdGVFbWFpbEZpZWxkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBidXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnVyZ2VyJylcbmNvbnN0IG1pZGRsZUxpbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWlkZGxlTGluZScpXG5jb25zdCBuYXZpZ2F0ZUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2aWdhdGUnKVxuXG5idXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG5cdG5hdmlnYXRlTGlzdC5jbGFzc0xpc3QudG9nZ2xlKCduYXZpZ2F0ZV9hY3RpdmUnKVxuXHRtaWRkbGVMaW5lLmNsYXNzTGlzdC50b2dnbGUoJ21pZGRsZUxpbmVfYWN0aXZlJylcblx0YnVyZ2VyLmNsYXNzTGlzdC50b2dnbGUoJ2J1cmdlcl90cmFuc3BhcmVudCcpXG59KVxuXG5jb25zdCBzZWFyY2hCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHJvcGRvd25fX3NlYXJjaEJ0bicpXG5jb25zdCBzZWFyY2hGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcm9wZG93bl9fc2VhcmNoRmllbGQnKVxuXG5zZWFyY2hCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG5cdHNlYXJjaEZpZWxkLmNsYXNzTGlzdC50b2dnbGUoJ2Ryb3Bkb3duX19zZWFyY2hGaWVsZF9hY3RpdmUnKVxufSkiLCJjb25zdCBwcmV2aWV3VmlkZW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJldmlldyB2aWRlbycpXG5jb25zdCBidG5QbGF5VmlkZW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJldmlld19fcGxheScpXG5cbmJ0blBsYXlWaWRlby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcblxuXHRidG5QbGF5VmlkZW8uY2xhc3NMaXN0LmFkZCgncHJldmlld19fcGxheV9oaWRkZW4nKVxuXHRwcmV2aWV3VmlkZW8ucGxheSgpXG5cdHByZXZpZXdWaWRlby5zZXRBdHRyaWJ1dGUoJ2NvbnRyb2xzJywgJ2NvbnRyb2xzJylcbn0pXG5cbiIsIi8vIGNvbnN0IHNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXInKVxuLy8gY29uc3QgcGhvdG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2xpZGVyX19waG90bycpXG4vLyBjb25zdCBidG5MZWZ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlckJ0bl9fbGVmdCcpXG4vLyBjb25zdCBidG5SaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXJCdG5fX3JpZ2h0Jylcbi8vIGxldCBjdXJyZW50ID0gMFxuXG4vLyBzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcignY29udGV4dG1lbnUnLCBjYW5jZWxFdmVudClcbi8vIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBjYW5jZWxFdmVudClcblxuLy8gZnVuY3Rpb24gY2FuY2VsRXZlbnQoZXZlbnQpIHtcbi8vIFx0ZXZlbnQucHJldmVudERlZmF1bHQoKVxuLy8gfVxuXG4vLyBidG5MZWZ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuLy8gXHRwaG90b1tjdXJyZW50XS5jbGFzc0xpc3QucmVtb3ZlKCdzbGlkZXJfX3Bob3RvX3Nob3cnKVxuXG4vLyBcdGN1cnJlbnQtLVxuXG4vLyBcdGlmIChjdXJyZW50IDwgMCkge1xuLy8gXHRcdGN1cnJlbnQgPSBwaG90by5sZW5ndGggLSAxXG4vLyBcdH1cbi8vIFx0cGhvdG9bY3VycmVudF0uY2xhc3NMaXN0LmFkZCgnc2xpZGVyX19waG90b19zaG93Jylcbi8vIH0pXG5cbi8vIGJ0blJpZ2h0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuLy8gXHRwaG90b1tjdXJyZW50XS5jbGFzc0xpc3QucmVtb3ZlKCdzbGlkZXJfX3Bob3RvX3Nob3cnKVxuXG4vLyBcdGN1cnJlbnQrK1xuXG4vLyBcdGlmIChjdXJyZW50ID09PSBwaG90by5sZW5ndGgpIHtcbi8vIFx0XHRjdXJyZW50ID0gMFxuLy8gXHR9XG4vLyBcdHBob3RvW2N1cnJlbnRdLmNsYXNzTGlzdC5hZGQoJ3NsaWRlcl9fcGhvdG9fc2hvdycpXG4vLyB9KVxuXG4iLCJjb25zdCBmb3JtRW1haWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9vdGVyRW1haWxfX2Zvcm0nKVxuY29uc3QgaW5wdXRGaWVsZEVtYWlsID0gZm9ybUVtYWlsLnF1ZXJ5U2VsZWN0b3IoJy5mb290ZXJFbWFpbF9faW5wdXQnKVxuY29uc3QgZXJyRmllbGRNZXNzYWdlID0gZm9ybUVtYWlsLnF1ZXJ5U2VsZWN0b3IoJy5lcnJGaWVsZE1lc3NhZ2UnKVxuY29uc3QgcmVnZXhwRW1haWwgPSBuZXcgUmVnRXhwKCcoW0EtetCQLdGPXSkrKFswLTlcXC1fXFwrXFwuXSkqKFtBLXrQkC3RjzAtOVxcLV9cXCtcXC5dKSpAKFtBLXrQkC3Rj10pKyhbMC05XFwtX1xcK1xcLl0pKihbQS160JAt0Y8wLTlcXC1fXFwrXFwuXSkqW1xcLl0oW0EtetCQLdGPXSkrJylcblxuXG5mb3JtRW1haWwuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24gKGV2ZW50KSB7XG5cblx0aWYgKCFyZWdleHBFbWFpbC50ZXN0KGlucHV0RmllbGRFbWFpbC52YWx1ZSkpIHtcblx0XHRlcnJGaWVsZE1lc3NhZ2UuaW5uZXJUZXh0ID0gJ9CS0LLQtdC00LjRgtC1INC60L7RgNGA0LXQutGC0L3Ri9C5IGVtYWlsJ1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KClcblx0fVxuXG59KVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdpbnZhbGlkJywgKGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xuXHRcdC8vcHJldmVudCB0aGUgYnJvd3NlciBmcm9tIHNob3dpbmcgZGVmYXVsdCBlcnJvciBidWJibGUgLyBoaW50XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHR9O1xufSkoKSwgdHJ1ZSk7XG4iXX0=
