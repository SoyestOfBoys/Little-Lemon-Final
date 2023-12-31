import star from '../pics/Star.png'
import photo1 from '../pics/headshot1.jpg'
import photo2 from '../pics/headshot2.jpg'
import photo3 from '../pics/headshot3.jpg'
import './testimonials.css'

function Testimonials() {
  return (
    <body className="testimonials">
      <h1>Testimonials</h1>
      <div className='TestiBox'>
        <div className="testimonial 1">
          <div className='TestiTop'>
            <img className='Headshot' src={photo1} alt="Sophia Patel" />
            <div className='NameBox'>
              <h3>Sophia Patel</h3>
              <div className='Stars'>
                <img className='Star' src={star} alt='star' /><img className='Star' src={star} alt='star' /><img className='Star' src={star} alt='star' /><img className='Star' src={star} alt='star' /><img className='Star' src={star} alt='star' />
              </div>
        </div></div>
        <p>"An impeccable fusion of flavors, cozy atmosphere, and impeccable presentation made this restaurant a new favorite in town!"</p>
      </div>
      <div className='testimonial 2'>
      <div className='TestiTop'>
        <img className='Headshot' src={photo3} alt='Allen Smithy' />
        <div className='NameBox'><h3>Allen Smithy</h3>
        <div className='Stars'><img className='Star' src={star} alt='star' /><img className='Star' src={star} alt='star' /><img className='Star' src={star} alt='star' /><img className='Star' src={star} alt='star' /><img className='Star' src={star} alt='star' /></div>
        </div></div>
        <p>"A culinary delight! The chef's creative flair shines through in every dish, and the service was top-notch."</p>
      </div>
      <div className='testimonial 3'>
      <div className='TestiTop'>
        <img className='Headshot' src={photo2} alt='Emily Johnson' />
        <div className='NameBox'><h3>Emily Johnson</h3>
        <div className='Stars'><img className='Star' src={star} alt='star' /><img className='Star' src={star} alt='star' /><img className='Star' src={star} alt='star' /><img className='Star' src={star} alt='star' /><img className='Star' src={star} alt='star' /></div></div></div>
        <p>"From the moment we walked in, we were greeted with warmth and treated to an unforgettable gastronomic journey."</p>
      </div></div>
    </body>
  );
}

export default Testimonials;
