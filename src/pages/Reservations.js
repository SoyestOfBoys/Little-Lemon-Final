import Nav from '../Nav'
import Foot from '../Foot'
import ResApp from '../reservations_components/ResApp'
import './reservations.css'

function Res(){
    return(
        <div>
        <h1>Reservations</h1>
        <Nav />
        <ResApp />
        <Foot />
        </div>
    )
}

export default Res