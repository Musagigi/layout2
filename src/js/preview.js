const previewVideo = document.querySelector('.previewVideo video')
const btnPlayVideo = document.querySelector('.previewVideo__play')

btnPlayVideo.addEventListener('click', function () {

	btnPlayVideo.classList.add('previewVideo__play_hidden')
	previewVideo.play()
	previewVideo.setAttribute('controls', 'controls')
})

