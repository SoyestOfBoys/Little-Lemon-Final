import star from '../pics/Star.png'
import photo1 from '../pics/headshot1.jpg'
import photo2 from '../pics/headshot2.jpg'
import photo3 from '../pics/headshot3.jpg'
import './testimonials.css'

function Testimonials() {
  return (
    <body className="testimonials">
      <h1>Testimonials</h1>
      <div className="testimonial 1">
        <img className='Headshot' src={photo1} alt="Sophia Patel" />
        <h3>Sophia Patel</h3>
        <img className='Star' src={star} alt='star' /><img className='Star' src={star} alt='star' /><img className='Star' src={star} alt='star' /><img className='Star' src={star} alt='star' /><img className='Star' src={star} alt='star' />
        <p>"An impeccable fusion of flavors, cozy atmosphere, and impeccable presentation made this restaurant a new favorite in town!"</p>
      </div>
      <div className='testimonial 2'>
        <img className='Headshot' src={photo2} alt='Allen Smithy' />
        <h3>Allen Smithy</h3>
        <img className='Star' src={star} alt='star' /><img className='Star' src={star} alt='star' /><img className='Star' src={star} alt='star' /><img className='Star' src={star} alt='star' /><img className='Star' src={star} alt='star' />
        <p>"A culinary delight! The chef's creative flair shines through in every dish, and the service was top-notch."</p>
      </div>
      <div className='testimonial 3'>
        <img className='Headshot' src={photo3} alt='Emily Johnson' />
        <h3>Emily Johnson</h3>
        <img className='Star' src={star} alt='star' /><img className='Star' src={star} alt='star' /><img className='Star' src={star} alt='star' /><img className='Star' src={star} alt='star' /><img className='Star' src={star} alt='star' />
        <p>"From the moment we walked in, we were greeted with warmth and treated to an unforgettable gastronomic journey."</p>
      </div>
    </body>
  );
}

export default Testimonials;
