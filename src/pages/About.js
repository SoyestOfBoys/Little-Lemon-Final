
import Story from '../about_components/Story'
import Slideshow from '../about_components/Slideshow'

import './about.css'
import Staff from '../about_components/Staff'

function About(){
    return(
        <div>
        <Slideshow />
        <Story />
        <Staff />
        </div>
    )
}

export default About