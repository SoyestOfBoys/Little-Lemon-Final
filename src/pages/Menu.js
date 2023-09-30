import Nav from '../Nav'
import Foot from '../Foot'
import MenuTop from '../menu_components/menu_top'
import MenuApp from '../menu_components/menu_app'
import MenuNav from '../menu_components/MenuNav'
import './menu.css'

function Menu (){
    return(
        <div>
        <Nav />
        <MenuTop />
        <MenuNav />
        <MenuApp />
        <Foot />
        </div>
    )
}

export default Menu