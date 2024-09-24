import React, { useState } from 'react'


import { Button, FormControlLabel, FormLabel, Paper, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import Header from '../components/Header'
import { addDoc, collection } from 'firebase/firestore'
import { database } from '../config/firebase'
import Footer from '../components/Footer'


const Servicereq = () => {
 const [requestid,setRequestid] = useState('');
 const [service,setService] = useState('')
 const [costumerid,setCostumerid] = useState('')
 const [roomid,setRoomID] = useState('')
 const [requestDate,setRequestDate] = useState('')




  const navigate = useNavigate();

  const handlestudentfrom = async (e)=>{
    e.preventDefault();
   
     
    let serviceobj = {
      requestid,
      service,
      costumerid,
      requestid,
      requestDate,
      
    }

    try {
      const docRef = await addDoc(collection(database, "ServicesData"),serviceobj)
      console.log("Document written with ID: ", docRef.id);
      navigate('/dashboard')
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    
  }
  return (
    <div>

   <Header/>
   <div style={{marginTop:"50px"}}>
   <form onSubmit={handlestudentfrom} >
      <Paper sx={{ margin: 2, padding: 5 ,overflow:"auto"}}>
        <Typography variant="h4" sx={{ marginBottom: 5 ,textAlign:"center"}}>
          <u>SERVICE REQUEST FORM</u>
        </Typography>
        <TextField
          sx={{ mb: 3 }}
          fullWidth
          label="Request ID"
          onChange={(e)=>setRequestid(e.target.value)}
        />
        <TextField
          sx={{ mb: 3 }}
          fullWidth
          label="Which Service you want"
          onChange={(e)=>setService(e.target.value)}

        />
        <TextField
          sx={{ mb: 3 }}
          fullWidth
          label="Your Costuner ID"
          onChange={(e)=>setCostumerid(e.target.value)}

        />
        <TextField
          sx={{ mb: 3 }}
          fullWidth
          label="Your Room ID"
          onChange={(e)=>setRoomID(e.target.value)}

        />
        <TextField
          sx={{ mb: 3 }}
          fullWidth
          label="Date of Service request"
          onChange={(e)=>setRequestDate(e.target.value)}

        />
          <br />
       
       <br /> <br />
        <Button fullWidth variant="contained" sx={{color:'gold'}} type="submit">
          Submit
        </Button>
      </Paper>
    </form>
   </div>
   <Footer/>
    </div>
 
  )
}

export default Servicereq
