import infoPic2 from '../pics/food3.jpg';
import infoPic1 from '../pics/chefs1.jpg';
import './info.css'

function Info() {
  return (
    <body className='Info'>
      <h1>Little Lemon</h1>
      <h2>Chicago, IL</h2>
      <div className='infoText'>
        <p>At Little Lemon, we believe in the power of simplicity and authenticity. Our carefully curated menu features a selection of dishes that showcase the bright and zesty essence of lemons, carefully balanced with the finest ingredients sourced locally to ensure a farm-to-table experience that tantalizes your taste buds.</p>
        <p>Beyond our dedication to exceptional cuisine, we are committed to providing impeccable service that leaves a lasting impression. Our attentive and friendly staff are always ready to cater to your needs, ensuring your visit to Little Lemon is filled with warmth and hospitality.</p>
        <p>Whether you're seeking a cozy spot for a leisurely brunch, a memorable dinner with loved ones, or simply a slice of our signature Lemon Cake to brighten your day, Little Lemon welcomes you to indulge in a culinary journey like no other.</p>
      </div>
      <div className='iPic1'>
        <img src={infoPic1} alt='Kitchen Staff' />
      </div>
      <div className='iPic2'>
        <img src={infoPic2} alt='Fantastic food!' />
      </div>
    </body>
  );
}

export default Info;