import Nav from '../Nav'
import Foot from '../Foot'
import Hero from '../home_components/Hero'
import Info from '../home_components/Info'
import Specials from '../home_components/Specials'
import Testimonials from '../home_components/Testimonials'

function Home(){
    return(
        <div>
        <h1>Homepage</h1>
        <Nav />
        <Hero />
        <Specials />
        <Testimonials />
        <Info />
        <Foot />
        </div>
    )
}

export default Home