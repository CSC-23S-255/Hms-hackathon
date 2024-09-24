import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { useNavigate } from 'react-router-dom';

const Cards = ({image,title,desc,roomno})=>  {

    const naviagte = useNavigate();
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea sx={{backgroundColor:'black'}}>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="green iguana"
        />
        <CardContent sx={{textAlign:'center',color:'white'}}>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'Green' }}>
            <span style={{color:'white'}}>Room no:</span>{roomno}
          </Typography>
          <Typography variant="body2" sx={{ color: 'Green' }}>
            <span style={{color:'white'}}>Room Status :</span>Available
          </Typography>
          <Typography variant="body2" sx={{ color: 'white' }}>
            {desc}
          </Typography>
         
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={()=>naviagte('/booking')} size="lg" sx={{backgroundColor:'gold',color:"black" ,marginLeft:'80px'}} >
          Click for Booking
        </Button>
      </CardActions>
    </Card>
  );
}

export default Cards