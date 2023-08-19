import menuTopImg from '../pics/food2.jpg';
import './menuTop.css'

function MenuTop(){
    return(
        <div className='menuTop'>
            <div className='menuTop[Image'>
                <img src={menuTopImg} alt="Great eats!" />
            </div>
            <div className='menuTopText'>
                <h1>Our Menu</h1>
                <p>Step into a world of culinary delight at Little Lemon, where the menu is a symphony of flavors designed to tantalize every palate. Our menu features a medley of globally-inspired dishes that speak to the chef's artistry. Starters like the crispy calamari with zesty lemon aioli offer a tantalizing prelude to the main courses. Seafood lovers can revel in the delicate flavors of the miso-glazed Chilean sea bass, while the slow-braised short ribs cater to those seeking comfort in every bite. Vegetarians are in for a treat with the wild mushroom risotto, with the earthy essence of porcini and truffle oil. The dessert offerings are a sweet crescendo to the meal, with the decadent lemon cake stealing the spotlight alongside classics like molten chocolate lava cake. We aim to make every dinning experience one to remember!</p>
            </div>
        </div>

    )
}

export default MenuTop