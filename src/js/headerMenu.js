const body = document.querySelector('.body')
const burger = body.querySelector('.burger')
const middleLine = burger.querySelector('.middleLine')
const navigateList = body.querySelector('.navigate')

burger.addEventListener('click', function () {
	navigateList.classList.toggle('navigate_active')
	middleLine.classList.toggle('middleLine_active')
	burger.classList.toggle('burger_transparent')
})

body.addEventListener('click', function (event) {

	if (!event.target.closest('.burger')) {
		navigateList.classList.remove('navigate_active')
		middleLine.classList.remove('middleLine_active')
		burger.classList.remove('burger_transparent')
	}
})

const searchBtn = document.querySelector('.dropdown__searchBtn')
const searchField = document.querySelector('.dropdown__searchField')

searchBtn.addEventListener('click', function () {
	searchField.classList.toggle('dropdown__searchField_active')
})