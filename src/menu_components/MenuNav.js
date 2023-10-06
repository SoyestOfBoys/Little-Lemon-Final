import './MenuNav.css'

function MenuNav(){
    return(
        <div className="MenuNavBar">
            <a href='#spec'><button>Specials</button></a>
            <a href='#app'><button>Appetizers</button></a>
            <a href='#ent'><button>Entrees</button></a>
            <a href='#des'><button>Deserts</button></a>
            <a href='#drink'><button>Drinks</button></a>
        </div>
    )
}

export default MenuNav