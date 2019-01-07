import './css/style.css'
import imageSource from './images/image.jpg'
import Carousel from './js/Carousel.js'

const image = new Image()
image.src = imageSource
document.body.appendChild(image)

const carousel = new Carousel()