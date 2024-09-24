import React, { useState } from 'react'
import Header from '../components/Header'
import { Button, Paper,  TextField, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { addDoc, collection } from 'firebase/firestore'
import { database } from '../config/firebase'
import Footer from '../components/Footer'


const Costumerfrom = () => {


    const [costumerid,setCostumerid] = useState('');
    const [Name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [phone,setPhone] = useState('')
    const [address,setAddress] = useState('');
    const [bookinghistory,setBookinghistory] = useState('');

   
   
   
     const navigate = useNavigate();
   
     const Costumerfrom = async (e)=>{
       e.preventDefault();

        
       let costumerobj = {
        costumerid,
        Name,
        email,
        phone,
        address,
        bookinghistory,
       }
   
       try {
         const docRef = await addDoc(collection(database, "Users"),costumerobj)
         console.log("Document written with ID: ", docRef.id);
         alert("You are added successfully")
         navigate('/dashboard')
       } catch (e) {
         console.error("Error adding document: ", e);
       }
    }
  return (
    <div>
      <Header/>
      <div style={{marginTop:"30px",color:"white"}}>
   <form onSubmit={Costumerfrom} >
      <Paper sx={{ margin: 2, padding: 5 ,overflow:"auto",backgroundColor:"gray"}}>
        <Typography variant="h4" sx={{ marginBottom: 5 ,textAlign:"center",color:"gold"}}>
          <u>COSTUMER FORM</u>
        </Typography>
        <TextField
          sx={{ mb: 3 ,color:"white"}}
          fullWidth
          label="Costumer ID"
          onChange={(e)=>setCostumerid(e.target.value)}
        />
        <TextField
          sx={{ mb: 3 ,color:"white" }}
          fullWidth
          label="Full Name"
          onChange={(e)=>setName(e.target.value)}

        />
        <TextField
          sx={{ mb: 3 ,color:"white" }}
          fullWidth
          label="Email"
          onChange={(e)=>setEmail(e.target.value)}

        />
        <TextField
          sx={{ mb: 3 ,color:"white"}}
          fullWidth
          label="phone Number"
          onChange={(e)=>setPhone(e.target.value)}

        />
        <TextField
          sx={{ mb: 3 ,color:"white"}}
          fullWidth
          label="Your Address"
          onChange={(e)=>setAddress(e.target.value)}

        />
        <TextField
          sx={{ mb: 3 ,color:"white"}}
          fullWidth
          label="When you last time vists our hotel"
          onChange={(e)=>setBookinghistory(e.target.value)}

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

export default Costumerfrom
