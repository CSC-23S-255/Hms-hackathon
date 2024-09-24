import React from 'react'
import Navbar from '../components/Header'
import Slider from '../components/Slider'
import "../screens/Dashboard.css"
import { NavLink } from 'react-router-dom'
import Footer from '../components/Footer'

const Dashboard = () => {
  return (
    <div>
        <Navbar/>
        <Slider/>


          <div className='container mt-5 mb-5' style={{backgroundColor:"gold",border:"2px solid black",height:'600px',borderRadius:"10px"}}>
             
             <h1 style={{marginLeft:"420px",marginTop:'5px',color:'black',fontFamily:"sans-serif"}}> <u>HOTEL SERVICES</u> </h1>
           

             <div style={{display:'flex',marginLeft:"130px"}}>

             <div style={{marginTop:"20px",alignItems:'center'}}>
                <NavLink to={'/userfrom'}>
              <div>
                <img style={{borderRadius:"50px"}} src="https://www.shutterstock.com/image-vector/avatar-gold-icon-vector-illustration-260nw-1608744904.jpg" width={100} alt="" />
              </div>
                 <div style={{marginTop:'10px',textAlign:'center'}}>
                  <h5>User rigisteration From</h5>
                 </div>
                </NavLink>
             </div>
             <div style={{marginTop:"20px",marginLeft:'150px',alignItems:'center'}}>
                <NavLink to={'/costumerfrom'}>
              <div>
                <img style={{borderRadius:"50px"}} src="https://www.shutterstock.com/image-vector/abstract-call-center-contact-us-600nw-2174864233.jpg" width={100} alt="" />
              </div>
                 <div style={{marginTop:'20px',textAlign:'center'}}>
                  <h5>costumer from </h5>
                 </div>
                </NavLink>
             </div>
             <div style={{marginTop:"20px",marginLeft:'240px',alignItems:'center'}}>
                <NavLink to={'/room'}>
              <div>
                <img style={{borderRadius:"50px"}} src="https://www.shutterstock.com/image-vector/label-room-layout-architectural-schematic-260nw-515112193.jpg" width={100} alt="" />
              </div>
                 <div style={{marginTop:'10px',textAlign:'center'}}>
                  <h5>Rooms Price<br />And their Status. </h5>
                 </div>
                </NavLink>
             </div>

               

    
             </div>
<div style={{display:'flex',marginLeft:"130px"}}>

<div style={{marginTop:"20px"}}>
   <NavLink to={'/booking'}>
 <div>
   <img style={{borderRadius:"50px"}} src="https://www.shutterstock.com/image-vector/vector-black-icon-booking-260nw-2359802475.jpg" width={100} alt="" />
 </div>
    <div style={{marginTop:'10px',textAlign:'center'}}>
     <h5>Booking from</h5>
    </div>
   </NavLink>
</div>
<div style={{marginTop:"20px",marginLeft:'220px'}}>
  <NavLink to={'/payment'}>
 <div>
   <img style={{borderRadius:"50px"}} src="https://static.vecteezy.com/system/resources/thumbnails/018/850/101/small_2x/online-payment-logo-design-template-vector.jpg" width={100} alt="" />
 </div>
    <div style={{marginTop:'10px',textAlign:'center'}}>
     <h5>Online Room Payment</h5>
    </div>
  </NavLink>
</div>
<div style={{marginTop:"20px",marginLeft:'180px'}}>
  <NavLink to={'/forstaff'}>
 <div>
   <img style={{borderRadius:"50px"}} src="https://www.shutterstock.com/image-vector/office-staff-logo-template-design-600w-755664016.jpg" width={100} alt="" />
 </div>
    <div style={{marginTop:'10px',textAlign:'center'}}>
     <h5>From only for Staff</h5>
    </div>
  </NavLink>
</div>

</div>
<div style={{display:'flex',marginLeft:'130px'}}>

<div style={{marginTop:"20px"}}>
   <NavLink to={'/services'}>
 <div>
   <img style={{borderRadius:"50px"}} src="https://www.shutterstock.com/shutterstock/photos/1267255807/display_1500/stock-vector-room-services-logo-1267255807.jpg" width={100} alt="" />
 </div>
    <div style={{marginTop:'20px',textAlign:'center'}}>
     <h5>Hottel Services</h5>
    </div>
   </NavLink>
</div>

</div>

          </div>

    <Footer/>

    </div>
  )
}

export default Dashboard
