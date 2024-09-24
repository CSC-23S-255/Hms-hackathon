import React, { useState } from 'react'


import { Button, FormControlLabel, FormLabel, Paper, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import Header from '../components/Header'
import { addDoc, collection } from 'firebase/firestore'
import { database } from '../config/firebase'
import Footer from '../components/Footer'

const Stafffrom = () => {
 const [Name,setName] = useState('');
 const [staffid,setStaffid] = useState('')
 const [role,setRole] = useState('')
 const [department,setDepartment] = useState('')
 const [contact,setContact] = useState('')
 const [shift,setShift] = useState('');



  const navigate = useNavigate();

  const handlestudentfrom = async (e)=>{
    e.preventDefault();
   
     
    let staffobj = {
      Name,
      staffid,
      role,
      department,
      Gender,
      contact,
    }

    try {
      const docRef = await addDoc(collection(database, "StaffData"),staffobj)
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
          <u>STAFF FORM</u>
        </Typography>
        <TextField
          sx={{ mb: 3 }}
          fullWidth
          label="Full Name"
          onChange={(e)=>setName(e.target.value)}
        />
        <TextField
          sx={{ mb: 3 }}
          fullWidth
          label="Staff ID"
          onChange={(e)=>setStaffid(e.target.value)}

        />
        <TextField
          sx={{ mb: 3 }}
          fullWidth
          label="Your Role"
          onChange={(e)=>setRole(e.target.value)}

        />
        <TextField
          sx={{ mb: 3 }}
          fullWidth
          label="Your Department"
          onChange={(e)=>setDepartment(e.target.value)}

        />
        <TextField
          sx={{ mb: 3 }}
          fullWidth
          label="Contact number"
          onChange={(e)=>setContact(e.target.value)}

        />
          <br />
          <FormLabel  sx={{color:"blue",fontSize:"20px"}}component="legend">Your ShiftTiming</FormLabel>
           <RadioGroup
        aria-label="gender"
        name="gender"
        // Step 3: Bind value to state
        onChange={(e)=>setShift(e.target.value)} // Step 4: Handle change event
        row // Optional: Aligns radio buttons horizontally
      >
        <FormControlLabel
        sx={{color:"blue",fontSize:"20px"}}
           value={'Male'}
          control={<Radio color="primary" />}
          label="Morinig Shift"
        />
        <FormControlLabel
        sx={{color:"blue",fontSize:"20px"}}
          value={'Female'}
          control={<Radio color="primary" />}
          label="Night Shift"
        />
      </RadioGroup> <br /> <br />
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

export default Stafffrom
