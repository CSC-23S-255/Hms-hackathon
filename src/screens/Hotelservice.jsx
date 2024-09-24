import React from 'react'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer';

const Hotelservice = () => {
    const navigate = useNavigate();
  return (
    <div>
      <Header/>

      <div style={{marginTop:'50px'}}>
           
       <div className='container' style={{display:'flex',border:'1px solid gray',backgroundColor:'white',gap:'20px'}}>
          <div>
                <img width={500} src="https://abcnews.go.com/images/Travel/gty_room_service_ll_130603_wblog.jpg" alt="room" />
          </div>
          <div> 
                <h1>Room Service</h1> <br />
                <h3>Price: $25 per order </h3>
                  <p>Enjoy in-room dining with a selection of dishes and beverages delivered straight to your door at any time of day. Perfect for a relaxing meal in privacy.</p>
            <br /><button onClick={()=>navigate('/request')} className='btn' style={{backgroundColor:'gold',color:'black'}}>Get This Service</button>        
          </div>
       </div>
     
       <div className='container' style={{display:'flex',border:'1px solid gray',backgroundColor:'white',gap:'20px',marginTop:'50px'}}>
          <div>
                <img width={500} src="https://images.squarespace-cdn.com/content/v1/5f765413bde0a20d679894a4/b9e8a0e4-0b8f-4315-8c6b-69852108c07e/wash+and+fold+laundry+okc" alt="room" />
          </div>
          <div> 
                <h1>Laundry and Dry Cleaning</h1> <br /><br /><br />
                <h3>Price: $15 per load for laundry, $30 for dry cleaning</h3>
                 <p>Description: Convenient laundry and dry cleaning services to ensure your clothes stay fresh and wrinkle-free throughout your stay. Same-day service often available.</p>
            <br /><button className='btn' style={{backgroundColor:'gold',color:'black'}}>Get This Service</button>        
          </div>
       </div>

       <div className='container' style={{display:'flex',border:'1px solid gray',backgroundColor:'white',gap:'20px',marginTop:'50px'}}>
          <div>
                <img width={500} src="https://www.onlinedegree.com/wp-content/uploads/2016/11/hotel_concierge.jpg" alt="room" />
          </div>
          <div> 
                <h1>Concierge Services (Tours & Ticket Booking)</h1> <br />
                <h3>Price: Varies depending on the activity (e.g., $50 for city tours)</h3>
                 <p>Description: Get personalized recommendations and assistance with booking local tours, activities, and tickets to popular attractions, making your stay more enjoyable.</p>
            <br /><button className='btn' style={{backgroundColor:'gold',color:'black'}}>Get This Service</button>        
          </div>
       </div>

       <div className='container' style={{display:'flex',border:'1px solid gray',backgroundColor:'white',gap:'20px',marginTop:'50px'}}>
          <div>
                <img width={500} src="https://image-tc.galaxy.tf/wijpeg-do41xwzuel3xvfd0lh7tbftwf/9n1a7467-copy.jpg?width=1920" alt="room" />
          </div>
          <div> 
                <h1>Airport Shuttle Service</h1> <br /><br /><br />
                <h3>Price: $40 one-way</h3>
                    <p>Description: Hassle-free transportation to and from the airport. Pre-booked shuttles ensure you arrive at your destination comfortably and on time.</p>
            <br /><button className='btn' style={{backgroundColor:'gold',color:'black'}}>Get This Service</button>        
          </div>
       </div>

       <div className='container' style={{display:'flex',border:'1px solid gray',backgroundColor:'white',gap:'20px',marginTop:'50px'}}>
          <div>
                <img width={500} src="https://www.usatoday.com/gcdn/presto/2022/05/26/USAT/fead36dc-9042-4b3f-ade2-1b6012ce3c2a-GettyImages-579240946.jpg?width=660&height=441&fit=crop&format=pjpg&auto=webp" alt="room" />
          </div>
          <div> 
                <h1>High-Speed Wi-Fi</h1> <br /><br />
                <h3>Price: $10 per day</h3>
                   <p>Description: Stay connected with high-speed internet access available throughout the hotel, perfect for business, streaming, or staying in touch with family.</p>
          <br />   <br /><button className='btn' style={{backgroundColor:'gold',color:'black'}}>Get This Service</button>        
          </div>
       </div>

       

      </div>

 <Footer/>
    </div>
  )
}

export default Hotelservice
