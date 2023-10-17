
import MenuTop from '../menu_components/menu_top'
import MenuApp from '../menu_components/menu_app'
import MenuNav from '../menu_components/MenuNav'
import './menu.css'

function Menu (){
    return(
        <div>
        <MenuTop />
        <MenuNav />
        <MenuApp />
        </div>
    )
}

export default Menu