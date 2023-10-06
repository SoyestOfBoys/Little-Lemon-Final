import './SlideshowApp.css';
import ImageSlider from './ImageSlider';
import {SliderData} from './sliderData'

function SlideshowApp() {
    return <ImageSlider slides={SliderData} />;
  }

export default SlideshowApp;