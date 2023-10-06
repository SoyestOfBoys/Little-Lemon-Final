import SlideshowApp from './SlideshowApp'
import './Slideshow.css'

function Slideshow(){
    return(
        <div className='SlideshowSection'>
            <div className='SlideApp'>
                <SlideshowApp />
                <div className='AboutTitle'>
                    <h1>The Little Lemon Story</h1>
                </div>
            </div>
        </div>
    )
}

export default Slideshow