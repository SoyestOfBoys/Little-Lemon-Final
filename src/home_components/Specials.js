import item1 from '../pics/item1.jpg'
import item2 from '../pics/item2.jpg'
import item3 from '../pics/item3.jpg'
import './specials.css'
import { Link } from 'react-router-dom';

function Specials() {
  return (
    <body className="specials">
      <div className='SpecTop'>
        <h1>Specials</h1>
        <div className='OButt'><button className='OrderButton'><Link to='/order'>Order Online</Link></button></div>
      </div>
      <div className='SpecialMenu'>
      <div className="box 1">
        <img src={item1} alt='Bruschetta' />
        <div className='TextBox 1'><h2>Bruschetta</h2>
        <p>Indulge your taste buds with our delightful Bruschetta, a classic Italian appetizer that perfectly captures the essence of fresh, vibrant flavors.</p>
        <h3>$6.99</h3></div>
      </div>
      <div className='box 2'>
        <img src={item2} alt='Greek Salad' />
        <div className='TextBox 1'><h2>Greek Salad</h2>
        <p>Embark on a Mediterranean culinary journey with our refreshing and authentic Greek Salad. Bursting with vibrant colors and an array of flavors, this delightful salad pays homage to the time-honored traditions of Greek cuisine.</p>
        <h3>$10.99</h3></div>
      </div>
      <div className='box 3'>
      <img src={item3} alt='Lemon Cake' />
      <div className='TextBox 1'><h2>Lemon Cake</h2>
        <p>Indulge in our Lemon Cake, a delightful dessert that brightens your day with every heavenly bite. This moist and tender cake is infused with the tantalizing fresh lemons, delivering a burst of flavor that dances on your taste buds.</p>
        <h3>$5.99</h3></div>
      </div>
      </div>
    </body>
  );
}

export default Specials;
