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