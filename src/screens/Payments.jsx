import React, { useState } from 'react'


import { Button, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Paper, Radio, RadioGroup, Select, TextField, Typography } from '@mui/material'

import { Navigate, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import { addDoc, collection } from 'firebase/firestore'
import { database } from '../config/firebase'


const Payments = () => {

  const [paymentid,setPaymentid] = useState('');
   
  const [bookingid,setBookingId] = useState('')

  const [Amount,setAmount] = useState('');

  const [paymentmethod,setPaymentmethod] = useState('');

const navigate = useNavigate();


 
  const handlesubfrom = async (e)=>{
      e.preventDefault();
     
  
      let payobj = {
          paymentid,
           bookingid,
           Amount,
           paymentmethod,
          
      }
  
      try {
          const docRef = await addDoc(collection(database, "RoomPayment"),payobj)
          console.log("Document written with ID: ", docRef.id);
          navigate('/dashboard')
          
  
        } catch (e) {
          console.error("Error adding document: ", e);
        }
  
     
   }
  
  return (
    <div>
         <Header/>
   <div style={{ marginTop: "50px"}}>
   <form  onSubmit={handlesubfrom} >
      <Paper sx={{ margin: 2, padding: 5 ,overflow:"auto"}}>
        <Typography variant="h4" sx={{ marginBottom: 5 ,textAlign:"center"}}>
          <u>Payment For</u>
        </Typography>
        <TextField
          required
          sx={{ mb: 3 ,color:"blue"}}
          fullWidth
          label="Payment Id"
          onChange={(e)=>setPaymentid(e.target.value)}
        />
               <TextField
          sx={{ mb: 3 }}
          fullWidth
          label="Booking Id"
          onChange={(e)=>setBookingId(e.target.value)}

        />

          <br />
          <TextField
            required
          sx={{ mb: 3 }}
          fullWidth
          label="Amount"
          onChange={(e)=>setAmount(e.target.value)}

        />
        
        <FormControl fullWidth margin="normal">
        <InputLabel id="option1-label" sx={{ color: 'blue' }} required >
            <h6>Payment Method</h6>
        </InputLabel>
        <Select onChange={(e)=>setPaymentmethod(e.target.value)} labelId="option1-label">
          <MenuItem  sx={{ color: 'blue' }}>
            CREDIT CARD
          </MenuItem>
          <MenuItem   sx={{ color: 'blue' }} >
            DEBIT CARD
          </MenuItem>
          <MenuItem   sx={{ color: 'blue' }} >
           NET BANKING
          </MenuItem>
          <MenuItem   sx={{ color: 'blue' }} >
            UPI
          </MenuItem>
        </Select>
      </FormControl>
       <br /><br />
        <Button fullWidth variant="contained" sx={{color:'gold'}} type="submit">
          Submit Payment
        </Button>
      </Paper>
    </form>
   </div>
    </div>
 
  )
}

export default Payments
