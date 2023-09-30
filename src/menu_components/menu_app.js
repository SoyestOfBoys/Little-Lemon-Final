import './menuApp.css'
import item1 from '../pics/item1.jpg'
import item2 from '../pics/item2.jpg'
import item3 from '../pics/item3.jpg'
import LobSalad from '../pics/LobSalad.png'
import Olives from '../pics/Olives.jpg'
import Salmon from '../pics/food2.jpg'
import tofu from '../pics/tofu.jpg'
import taco from '../pics/Taco.jpg'
import pizza from '../pics/pizza.jpg'
import affogato from '../pics/affogato.jpg'
import cheesecake from '../pics/cheesecake.jpg'

// Each div is a menu page. h1=page title, h2=item name, p=description, h3=price
function MenuApp(){
    return(
        <div class="outer">
            <div id='spec'>

                <h1>Specials</h1>

                <h2>Bruschetta</h2>
                <img src={item1} alt='Bruschetta' />
                <p>Indulge your taste buds with our delightful Bruschetta, a classic Italian appetizer that perfectly captures the essence of fresh, vibrant flavors.</p>
                <h3>$6.99</h3>

                <h2>Greek Salad</h2>
                <img src={item2} alt='Greek Salad' />
                <p>Embark on a Mediterranean culinary journey with our refreshing and authentic Greek Salad. Bursting with vibrant colors and an array of flavors, this delightful salad pays homage to the time-honored traditions of Greek cuisine.</p>
                <h3>$10.99</h3>

                <h2>Lemon Cake</h2>
                <img src={item3} alt='lemon cake' />
                <p>Indulge in our Lemon Cake, a delightful dessert that brightens your day with every heavenly bite. This moist and tender cake is infused with the tantalizing fresh lemons, delivering a burst of flavor that dances on your taste buds.</p>
                <h3>$5.99</h3>

            </div>
            <div id='app'>

                <h1>Appetizers</h1>

                <h2>Rotating Soup of the Day</h2>
                <p>Ask your server for today's selection</p>
                <h3>$6.99</h3>

                <h2>Lemon-Infused Marinatted Olives</h2>
                <img src={Olives} alt='Olives' />
                <p>A blend of mixed olives marinated with lemon zest, fresh herbs, and extra virgin olive oil.</p>
                <h3>$6.99</h3>

                <h2>Truffle-Infused Mushroom Risotto Croquettes</h2>
                <p>Creamy mushroom risotto balls infused with truffle oil, lightly fried and served with a lemon aioli.</p>
                <h3>$9.99</h3>

                <h2>Prosciutto-Wrapped Figs</h2>
                <p>Sweet figs stuffed with goat cheese, wrapped in prosciutto, and drizzled with a lemon-infused balsamic reduction.</p>
                <h3>$11.99</h3>

                <h2>Lobster and Avocado Salad</h2>
                <img src={LobSalad} alt='Lobster Salad' />
                <p>Chilled lobster chunks with ripe avocado, mixed greens, cherry tomatoes, and a lemon-citrus butter dressing.</p>
                <h3>$16.99</h3>

                <h2>Little Lemon Oysters</h2>
                <p>Fresh oysters served on the half-shell with a zesty lemon mignonette sauce and a touch of grated horseradish.</p>
                <h3>$22.99</h3>

            </div>
            <div id='ent'>

                <h1>Entrées</h1>
                <p>All entrées served with house salad.</p>

                <h2>Lemon Herb Chicken Piccata</h2>
                <p>Tender chicken breasts cooked in a lemony caper sauce, accompanied by wild rice and sautéed green beans.</p>
                <h3>$16.99</h3>

                <h2>Lemon Butter Salmon</h2>
                <img src={Salmon} alt='Salmon' />
                <p>Pan-seared salmon fillet glazed with a luscious lemon butter sauce, served with garlic-infused mashed potatoes and seasonal vegetables.</p>
                <h3>$17.99</h3>

                <h2>Lemon Risotto with Roasted Vegetables</h2>
                <p>Creamy Arborio rice cooked with lemon zest, topped with a medley of oven-roasted vegetables and Parmesan cheese.</p>
                <h3>$10.99</h3>

                <h2>Lemon Dijon Glazed Pork Tenderloin</h2>
                <p>Tender slices of pork tenderloin glazed with a tangy lemon Dijon sauce, accompanied by garlic mashed potatoes and roasted Brussels sprouts.</p>
                <h3>$22.99</h3>

                <h2>Citrus Glazed Tofu Stir-Fry</h2>
                <img src={tofu} alt='Tofu' />
                <p>Crispy tofu cubes tossed in a zingy citrus glaze with colorful bell peppers, broccoli florets, and snap peas. Served over fragrant jasmine rice.</p>
                <h3>$9.99</h3>

            </div>
            <div className='Ent2'>

                <h2>Veggie Stuffed Portobello Mushrooms</h2>
                <p>Portobello mushroom caps stuffed with a blend of seasoned vegetables, goat cheese, and breadcrumbs, baked to perfection and drizzled with lemon-infused olive oil.</p>
                <h3>$11.99</h3>

                <h2>Lemon Garlic Shrimp Tacos</h2>
                <img src={taco} alt='Taco' />
                <p>Soft corn tortillas filled with plump shrimp sautéed in lemon and garlic, topped with shredded lettuce, diced tomatoes, and a zesty avocado crema.</p>
                <h3>$12.99</h3>

                <h2>Shrimp Scampi Linguine</h2>
                <p>Jumbo shrimp sautéed in garlic and lemon-infused white wine sauce, served over linguine pasta with a sprinkle of fresh parsley.</p>
                <h3>$18.99</h3>

                <h2>Windy City Deep Dish Pizza</h2>
                <img src={pizza} alt='Pizza' />
                <p>A classic Chicago-style deep-dish pizza with a hearty layer of melted mozzarella, sautéed spinach, roasted red peppers, caramelized onions, and garlic in a chunky tomato sauce. Serves 2-4 people.</p>
                <h3>$32.99</h3>

                <h2>Chi-Town Street Food Platter</h2>
                <p>A trio of Chicago street food favorites: a classic Chicago-style hot dog, an Italian beef sandwich, and a jumbo soft pretzel. Served with a side of giardiniera and house-made mustard.</p>
                <h3>$19.99</h3>

            </div>
            <div id='des'>
                <h1>Deserts</h1>

                <h2> Little Lemon's Signature Affogato</h2>
                <img src={affogato} alt='Affogato' />
                <p>A scoop of our house-made lemon sorbet drowned in a shot of freshly brewed espresso, finished with a sprinkle of lemon zest.</p>
                <h3>$6.99</h3>

                <h2> Lemon Blueberry Parfait </h2>
                <p>Layers of zesty lemon-infused yogurt, fresh blueberries, and crunchy granola, topped with a drizzle of honey and a lemon twist.</p>
                <h3>$7.99</h3>

                <h2>Citrus Burst Cheesecake</h2>
                <img src={cheesecake} alt='Cheesecake' />
                <p>Creamy cheesecake with a hint of lemon zest, topped with a luscious citrus compote and a sprinkle of candied lemon peel.</p>
                <h3>$9.99</h3>

                <h2>Sunshine Sorbet Trio</h2>
                <p>A refreshing trio of house-made sorbets: lemon, mango, and raspberry. Served in a chilled bowl with a sprig of mint.</p>
                <h3>$8.99</h3>

                <h2>Warm Lemon Pudding Cake</h2>
                <p>A comforting dessert featuring a warm, gooey lemon pudding layer beneath a light and airy cake. Served with a scoop of vanilla bean ice cream.</p>
                <h3>$8.99</h3>
            </div>
            <div id='drink'>

                <h1>Drinks</h1>

                <h2>Sodas</h2>
                <p>Coke, Diet Coke, Sprite, Fanta, Barq's, Pibb</p>
                <h3>$3.99</h3>

                <h2>Domestic Beer</h2>
                <p>Budwieser, Budd Lite, Shock Top, Michelob</p>
                <h3>$6.99</h3>

                <h2>Craft Beer</h2>
                <p>Goose Island IPA, 312, Sofie</p>
                <h3>$8.99</h3>

                <h2>Lemonade Fizz</h2>
                <p>A refreshing blend of vodka, fresh lemon juice, and a touch of elderflower liqueur, topped with sparkling water and garnished with a lemon wheel.</p>
                <h3>$7.99</h3>

                <h2>Lavender Lemon Drop</h2>
                <p>Vodka, lavender syrup, and fresh lemon juice shaken over ice and served in a sugar-rimmed glass. Garnished with a sprig of fresh lavender.</p>
                <h3>$7.99</h3>

                <h2>Sunset Sangria</h2>
                <p>A citrus-infused blend of red wine, brandy, orange liqueur, fresh lemon juice, and a medley of seasonal fruits.</p>
                <h3>$7.99</h3>

                <h2>Ginger Lemon Whiskey Sour</h2>
                <p>Bourbon mixed with ginger liqueur, lemon juice, and a touch of honey. Shaken with ice and strained into a rocks glass, garnished with a candied ginger slice.</p>
                <h3>$7.99</h3>

                <h2>Limoncello Martini</h2>
                <p>A classic martini with a twist, featuring vodka, Limoncello liqueur, and a splash of fresh lemon juice. Served in a chilled martini glass with a sugar rim.</p>
                <h3>$7.99</h3>
            </div>
        </div>
    )
}

export default MenuApp