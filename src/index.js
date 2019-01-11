// Import de tous les différents dossiers/fichiers 
import './css/style.css'
import imageSource from './images/image.jpg'
import Carousel from './js/Carousel.js'

console.log("Hello Hetic")

// Changement de la source de l'image
const image = new Image()
image.src = imageSource
document.body.appendChild(image)

const carousel = new Carousel()

// Hot Reload
if(module.hot)
{
    module.hot.accept()

    module.hot.dispose(() =>
    {
        console.log('dispose')
        // Enlever l'image lors du hot reload
        document.body.removeChild(image)
    })
}