const slider = document.querySelector('.slider')
const photo = document.querySelectorAll('.slider__photo')
const btnLeft = document.querySelector('.sliderBtn__left')
const btnRight = document.querySelector('.sliderBtn__right')
let current = 0

slider.addEventListener('contextmenu', cancelEvent)
slider.addEventListener('mousedown', cancelEvent)

function cancelEvent(event) {
	event.preventDefault()
}

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

