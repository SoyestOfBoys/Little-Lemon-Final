import Nav from '../Nav'
import Foot from '../Foot'
import MenuTop from '../menu_components/menu_top'
import MenuApp from '../menu_components/menu_app'

function Menu (){
    return(
        <div>
        <h1>Menu</h1>
        <Nav />
        <MenuTop />
        <MenuApp />
        <Foot />
        </div>
    )
}

export default Menu