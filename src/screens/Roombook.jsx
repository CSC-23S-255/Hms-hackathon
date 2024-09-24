import React, { useState } from 'react'
import Header from '../components/Header'
import { Button, Paper,  TextField, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { addDoc, collection } from 'firebase/firestore'
import { database } from '../config/firebase'
import Footer from '../components/Footer'


const Roombook = () => {


    const [bookingid,setBookingid] = useState('');
    const [costumerid,setCoutumerId] = useState('')
    const [roomnum,setRoomnum] = useState('')
    const [bookingdate,setBookingDate] = useState('')
    const [checkinDate,setCheckinDate] = useState('');
    const [checkout,setCheckOut] = useState('');

   
   
   
     const navigate = useNavigate();
   
     const Userfrom = async (e)=>{
       e.preventDefault();
  
        
       let bookobj = {
         bookingid,
         costumerid,
         roomnum,
         bookingdate,
         checkinDate,
         checkinDate,
       }
   
       try {
         const docRef = await addDoc(collection(database, "Room Booking"),bookobj)
         console.log("Document written with ID: ", docRef.id);
         alert("Costumer added successfully")
         navigate('/dashboard')
       } catch (e) {
         console.error("Error adding document: ", e);
       }
    }
  return (
    <div>
      <Header/>
      <div style={{marginTop:"30px",color:"white"}}>
   <form onSubmit={Userfrom} >
      <Paper sx={{ margin: 2, padding: 5 ,overflow:"auto",backgroundColor:"gray"}}>
        <Typography variant="h4" sx={{ marginBottom: 5 ,textAlign:"center",color:"gold"}}>
          <u>BOOKING FORM</u>
        </Typography>
        <TextField
          sx={{ mb: 3 ,color:"white"}}
          fullWidth
          label="Booking ID"
          onChange={(e)=>setBookingid(e.target.value)}
        />
        <TextField
          sx={{ mb: 3 ,color:"white" }}
          fullWidth
          label="Costumer ID"
          onChange={(e)=>setCoutumerId(e.target.value)}

        />
        <TextField
          sx={{ mb: 3 ,color:"white" }}
          fullWidth
          label="Room Number"
          onChange={(e)=>setRoomnum(e.target.value)}

        />
        <TextField
          sx={{ mb: 3 ,color:"white"}}
          fullWidth
          label="Booking Date"
          onChange={(e)=>setBookingDate(e.target.value)}

        />
        <TextField
          sx={{ mb: 3 ,color:"white"}}
          fullWidth
          label="CheckIn Date"
          onChange={(e)=>setCheckinDate(e.target.value)}

        />
        <TextField
          sx={{ mb: 3 ,color:"white"}}
          fullWidth
          label="CHeckOut Date"
          onChange={(e)=>setCheckOut(e.target.value)}

        />
          <br /> <br />
        <Button fullWidth sx={{backgroundColor:'gold'}} variant="contained" type="submit">
          Submit
        </Button>
      </Paper>
    </form>
   </div>


   <Footer/>
    </div>
 




  )
}

export default Roombook
