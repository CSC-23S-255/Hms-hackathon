import React, { useState } from 'react'
import Header from '../components/Header'
import { Button, Paper,  TextField, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { addDoc, collection } from 'firebase/firestore'
import { database } from '../config/firebase'
import Footer from '../components/Footer'


const Userfrom = () => {


    const [userid,setUserid] = useState('');
    const [Name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [role,setRole] = useState('');
    const [contact,setContact] = useState('');

   
   
   
     const navigate = useNavigate();
   
     const Userfrom = async (e)=>{
       e.preventDefault();
       console.log(Name,userid,email,role,contact);
        
       let userobj = {
         Name,
         userid,
         email,
         password,
         role,
         contact,
       }
   
       try {
         const docRef = await addDoc(collection(database, "Users"),userobj)
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
      <Paper sx={{ margin: 2, padding: 5 ,overflow:"auto",backgroundColor:"lightgray"}}>
        <Typography variant="h4" sx={{ marginBottom: 5 ,textAlign:"center",color:"gold"}}>
          <u>USER REGISTRATION FORM</u>
        </Typography>
        <TextField
          sx={{ mb: 3 ,color:"white"}}
          fullWidth
          label="User ID"
          onChange={(e)=>setUserid(e.target.value)}
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
          label="Password"
          onChange={(e)=>setPassword(e.target.value)}

        />
        <TextField
          sx={{ mb: 3 ,color:"white"}}
          fullWidth
          label="Your Role"
          onChange={(e)=>setRole(e.target.value)}

        />
        <TextField
          sx={{ mb: 3 ,color:"white"}}
          fullWidth
          label="Contact Number"
          onChange={(e)=>setContact(e.target.value)}

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

export default Userfrom
