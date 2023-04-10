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

	if (current < 0) {
		current = photo.length - 1
	}
	photo[current].classList.add('slider__photo_show')
})

btnRight.addEventListener('click', function () {
	photo[current].classList.remove('slider__photo_show')

	current++

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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlckJ1cmdlci5qcyIsImhlYWRlclNlYXJjaEJ0bi5qcyIsInByZXZpZXcuanMiLCJzbGlkZXIuanMiLCJ2YWxpZGF0ZUVtYWlsRmllbGQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXJnZXInKVxuY29uc3QgbWlkZGxlTGluZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5taWRkbGVMaW5lJylcbmNvbnN0IG5hdmlnYXRlTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZpZ2F0ZScpXG5cbmJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcblx0bmF2aWdhdGVMaXN0LmNsYXNzTGlzdC50b2dnbGUoJ25hdmlnYXRlX2FjdGl2ZScpXG5cdG1pZGRsZUxpbmUuY2xhc3NMaXN0LnRvZ2dsZSgnbWlkZGxlTGluZV9hY3RpdmUnKVxuXHRidXJnZXIuY2xhc3NMaXN0LnRvZ2dsZSgnYnVyZ2VyX3RyYW5zcGFyZW50Jylcbn0pIiwiY29uc3Qgc2VhcmNoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duX19zZWFyY2hCdG4nKVxuY29uc3Qgc2VhcmNoRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHJvcGRvd25fX3NlYXJjaEZpZWxkJylcblxuc2VhcmNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuXHRzZWFyY2hGaWVsZC5jbGFzc0xpc3QudG9nZ2xlKCdkcm9wZG93bl9fc2VhcmNoRmllbGRfYWN0aXZlJylcbn0pIiwiY29uc3QgcHJldmlld1ZpZGVvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZXZpZXdWaWRlbyB2aWRlbycpXG5jb25zdCBidG5QbGF5VmlkZW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJldmlld1ZpZGVvX19wbGF5JylcblxuYnRuUGxheVZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuXG5cdGJ0blBsYXlWaWRlby5jbGFzc0xpc3QuYWRkKCdwcmV2aWV3VmlkZW9fX3BsYXlfaGlkZGVuJylcblx0cHJldmlld1ZpZGVvLnBsYXkoKVxuXHRwcmV2aWV3VmlkZW8uc2V0QXR0cmlidXRlKCdjb250cm9scycsICdjb250cm9scycpXG59KVxuXG4iLCJjb25zdCBwaG90byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zbGlkZXJfX3Bob3RvJylcbmNvbnN0IGJ0bkxlZnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuTGVmdCcpXG5jb25zdCBidG5SaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG5SaWdodCcpXG5sZXQgY3VycmVudCA9IDBcblxuYnRuTGVmdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcblx0cGhvdG9bY3VycmVudF0uY2xhc3NMaXN0LnJlbW92ZSgnc2xpZGVyX19waG90b19zaG93JylcblxuXHRjdXJyZW50LS1cblxuXHRpZiAoY3VycmVudCA8IDApIHtcblx0XHRjdXJyZW50ID0gcGhvdG8ubGVuZ3RoIC0gMVxuXHR9XG5cdHBob3RvW2N1cnJlbnRdLmNsYXNzTGlzdC5hZGQoJ3NsaWRlcl9fcGhvdG9fc2hvdycpXG59KVxuXG5idG5SaWdodC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcblx0cGhvdG9bY3VycmVudF0uY2xhc3NMaXN0LnJlbW92ZSgnc2xpZGVyX19waG90b19zaG93JylcblxuXHRjdXJyZW50KytcblxuXHRpZiAoY3VycmVudCA9PT0gcGhvdG8ubGVuZ3RoKSB7XG5cdFx0Y3VycmVudCA9IDBcblx0fVxuXHRwaG90b1tjdXJyZW50XS5jbGFzc0xpc3QuYWRkKCdzbGlkZXJfX3Bob3RvX3Nob3cnKVxufSlcblxuIiwiY29uc3QgZm9ybUVtYWlsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvb3RlckVtYWlsX19mb3JtJylcbmNvbnN0IGlucHV0RmllbGRFbWFpbCA9IGZvcm1FbWFpbC5xdWVyeVNlbGVjdG9yKCcuZm9vdGVyRW1haWxfX2lucHV0JylcbmNvbnN0IGVyckZpZWxkTWVzc2FnZSA9IGZvcm1FbWFpbC5xdWVyeVNlbGVjdG9yKCcuZXJyRmllbGRNZXNzYWdlJylcbmNvbnN0IHJlZ2V4cEVtYWlsID0gbmV3IFJlZ0V4cCgnKFtBLXrQkC3Rj10pKyhbMC05XFwtX1xcK1xcLl0pKihbQS160JAt0Y8wLTlcXC1fXFwrXFwuXSkqQChbQS160JAt0Y9dKSsoWzAtOVxcLV9cXCtcXC5dKSooW0EtetCQLdGPMC05XFwtX1xcK1xcLl0pKltcXC5dKFtBLXrQkC3Rj10pKycpXG5cblxuZm9ybUVtYWlsLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uIChldmVudCkge1xuXHRjb25zb2xlLmxvZygndGVzdCcpO1xuXHRpZiAoIXJlZ2V4cEVtYWlsLnRlc3QoaW5wdXRGaWVsZEVtYWlsLnZhbHVlKSkge1xuXHRcdGVyckZpZWxkTWVzc2FnZS5pbm5lclRleHQgPSAn0JLQstC10LTQuNGC0LUg0LrQvtGA0YDQtdC60YLQvdGL0LkgZW1haWwnXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKVxuXHR9XG5cbn0pXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2ludmFsaWQnLCAoZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7XG5cdFx0Ly9wcmV2ZW50IHRoZSBicm93c2VyIGZyb20gc2hvd2luZyBkZWZhdWx0IGVycm9yIGJ1YmJsZSAvIGhpbnRcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdH07XG59KSgpLCB0cnVlKTtcbiJdfQ==
