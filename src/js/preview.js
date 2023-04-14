const previewVideo = document.querySelector('.preview video')
const btnPlayVideo = document.querySelector('.preview__play')

btnPlayVideo.addEventListener('click', function () {

	btnPlayVideo.classList.add('preview__play_hidden')
	previewVideo.play()
	previewVideo.setAttribute('controls', 'controls')
})

