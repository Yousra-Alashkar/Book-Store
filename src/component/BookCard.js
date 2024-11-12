import  React,{useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { books } from './data'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AddTaskIcon from '@mui/icons-material/AddTask';
import { useDispatch } from "react-redux";
import { Container } from '@mui/material';
import {addToCart, countItems} from '../redux/action'

export default function BookCard({ book ,  index }) {

   const {name,image,pages,author,summary,description} = books[index]

   const dispatch = useDispatch();
   const [isPressed , setIsPressed] = useState(false)
   

   const handleAddToCart = (book) => {
      setIsPressed(prevState => !prevState) ; 
      console.log(book); 
      dispatch(addToCart(book))
      dispatch(countItems(book))
        }
      

  return (
    <Card sx={{ width:320, backgroundColor:"#fffffff" ,overflow:'visible'}}>
    <Container>
     <Container sx={{  display: 'flex' , justifyContent:'center'}}>
      <CardMedia sx={{position:'flex' , marginTop:-10 , width:200 , height:250  }}
        component="img"
        alt="green iguana"
        height="140"
        image={image}
      />
      </Container>
      
      <CardContent>
        <Container sx={{display:'flex' ,alignItems:'center' ,justifyContent:'center',textAlign:'center'}}>
        <Typography gutterBottom variant="h6"  >
          {name}
        </Typography>
        <Typography gutterBottom variant="p" >
          ({pages})
        </Typography>
        </Container>
        <Typography variant="body2" color="text.secondary" textAlign={'center'}>
       {summary}
        </Typography>
        <Typography gutterBottom marginTop={4} color='#814407' >
          {author}
        </Typography>
      </CardContent>
         
      <CardActions >
      <Button sx={{backgroundColor:"#e0b283"}}
         variant="contained"  
         endIcon={isPressed?<AddTaskIcon/> : < AddShoppingCartIcon/>}
         onClick={()=>handleAddToCart(book)}>
        {isPressed?'Added to cart' : 'Add to cart'}
      </Button>
      </CardActions>
      </Container>
    </Card>

  );
}

