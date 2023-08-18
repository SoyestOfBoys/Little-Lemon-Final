import Nav from '../Nav'
import Foot from '../Foot'
import Story from '../about_components/Story'
import Slideshow from '../about_components/About_Slideshow'
import Staff from '../about_components/Staff'


function About(){
    return(
        <div>
        <h1>About</h1>
        <Nav />
        <Slideshow />
        <Story />
        <Staff />
        <Foot />
        </div>
    )
}

export default About