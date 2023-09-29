import chef from '../pics/chef2.jpg'
import maitreD from '../pics/maitre.jpg'
import manager from '../pics/manage.jpg'
import './staff.css'

function Staff(){
    return(
    <div className='staff'>
        <h1 className='staffHead'>Our Staff</h1>
        <div className='BioSec'>
        <div className='staffer'>
            <h2>Maître D'</h2>
            <img  src={maitreD} alt='James Mitchell' />
            <h3>James Mitchell</h3>
            <p>At Little Lemon Chicago, James Mitchell stands as an exceptional Maître D' with an unwavering dedication to crafting unforgettable dining moments. With years of experience in the heart of the Windy City's culinary scene, he orchestrates flawless service and an inviting atmosphere that captures the essence of the city's vibrant dining culture. James' expertise ensures that every guest at Little Lemon Chicago is treated to a remarkable and personalized dining journey.</p>
        </div>
        <div className='staffer'>
            <h2>Chef/Owner</h2>
            <img src={chef} alt="Isabella Marino" />
            <h3>Isabella Marino</h3>
            <p>Chef Isabella Marino, a culinary virtuoso at Little Lemon, infuses her dishes with a symphony of flavors that reflect her innovative approach to cooking. With a profound respect for local ingredients, her creations celebrate the essence of Chicago's rich food culture while pushing the boundaries of gastronomy. With a creative spirit and a commitment to culinary excellence, Chef Isabella Marino tantalizes taste buds and leaves a lasting impression on every diner.</p>
        </div>
        <div className='staffer'>
            <h2>Manager</h2>
            <img src={manager} alt='Emily Thompson ' />
            <h3>Emily Thompson</h3>
            <p>As the Manager at Little Lemon, Emily Thompson seamlessly weaves her passion for hospitality into every aspect of the dining experience. With a keen eye for detail and a warm demeanor, she ensures that each guest is welcomed into a realm of comfort and delight. Emily's leadership fosters a harmonious synergy between the staff and patrons, making every visit to Little Lemon an exceptional and memorable occasion.</p>
        </div>
        </div>
    </div>
    )}

export default Staff