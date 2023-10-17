import Hero from '../home_components/Hero'
import Info from '../home_components/Info'
import Specials from '../home_components/Specials'
import Testimonials from '../home_components/Testimonials'
import './home.css'

function Home(){
    return(
        <body>
        <div>
            <Hero />
            <Specials />
            <Testimonials />
            <Info />
        </div>
        </body>
    )
}

export default Home