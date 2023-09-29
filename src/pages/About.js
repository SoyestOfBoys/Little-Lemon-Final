import Nav from '../Nav'
import Foot from '../Foot'
import Story from '../about_components/Story'
import Slideshow from '../about_components/Slideshow'

import './about.css'
import Staff from '../about_components/Staff'

function About(){
    return(
        <div>
        <Nav />
        <Slideshow />
        <Story />
        <Staff />
        <Foot />
        </div>
    )
}

export default About