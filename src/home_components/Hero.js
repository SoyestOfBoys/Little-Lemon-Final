import './hero.css'
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <body className='heroMain'>
      <div className='Content'>
        <h1>Little Lemon</h1>
        <h3>Chicago, IL</h3>
      <p>Nestled in the heart of Chicago, our cozy and vibrant café is a haven for lemon lovers and food enthusiasts alike. Embrace the sunny charm of our charming establishment as we invite you to embark on a delightful culinary journey.</p>
      <p>Whether you're seeking a delightful slice of heaven with your coffee or a whole cake to celebrate life's special moments, Little Lemon promises a warm ambiance and a lemony twist to brighten your day.</p></div>
      <div className='HeroLeft'>
      <div className='HeroPic'>
      <div className='ButtonDiv'><button className='BookButton'><Link to='/reservations'>Book Table</Link></button></div>
      </div></div>
    </body>
  );
}

export default Hero;