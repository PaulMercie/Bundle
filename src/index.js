// Import de tous les différents dossiers/fichiers 
import './css/style.css'
import imageSource from './images/image.jpg'
import Carousel from './js/Carousel.js'

// Changement de la source de l'image
const image = new Image()
image.src = imageSource
document.body.appendChild(image)

const carousel = new Carousel()