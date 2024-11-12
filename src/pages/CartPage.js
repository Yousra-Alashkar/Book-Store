import Header from "../component/HeaderT";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import {  Container } from "@mui/material";
import CardMedia from '@mui/material/CardMedia';
import LottieAnimation from "../component/LottieAnimation";
import emptyCart from '../component/animation/emptyCart.json';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { removeBook, returnDate } from "../redux/action";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useNavigate } from "react-router-dom";


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 340,
  bgcolor: '#fcf7f4 ',
  boxShadow: 24,
  p: 4,
  
};
function CartPage () {

  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalItems = useSelector((state) => state.cart.count);
  const sum = Object.values(totalItems).reduce((acc,num) => acc + num ,0)
  const [currentDate , setCuurentDate] = useState ()
  useEffect(() => {
    const Today = new Date();
    setCuurentDate(Today)
  }, [])

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [value, setValue] = useState(dayjs(currentDate));
  const dateFormate = {year:'numeric' , month:'2-digit' , day:'2-digit'};
  console.log(new Intl.DateTimeFormat('en-EG' , dateFormate).format(value))
  
  const dispatch = useDispatch();
  const handleDelete = (index) => {
    dispatch(removeBook(index))
    };
    
  const [checked, setChecked] =useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    console.log(!checked)
  };
  const navigate = useNavigate();

  const handleDate = (newValue) =>{
    setValue(newValue);
  }

  const handleContinue = () => {
    navigate('/payment');
    dispatch(returnDate(value)); 
   }


    return(
<div>
<Header/>

<Container sx={{display:"flex",justifyContent:"center",gap:2 ,marginTop:15}}>
    {cartItems.length===0 ? (
        <LottieAnimation lotti={emptyCart} height={500} width={500} />
    ) : (<>
   
   <TableContainer  component={Paper}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><Typography gutterBottom variant="h6" color='#814407'  >
              </Typography></TableCell>
               <TableCell><Typography gutterBottom variant="h6" color='#814407'  >
               Name</Typography></TableCell>
               <TableCell><Typography gutterBottom variant="h6" color='#814407'  >
               Author</Typography></TableCell>
               <TableCell><Typography gutterBottom variant="h6" color='#814407'  >
               Pages</Typography></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cartItems.map((book, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              
            >
              <TableCell >
                <CardMedia sx={{position:'flex' , width:70 , height:100  }}
                component="img"
                alt="green iguana"
                height="50"
                image={book.image}
           /></TableCell>
              <TableCell >{book.name}</TableCell>
              <TableCell >{book.author}</TableCell>
              <TableCell >{book.pages}</TableCell>
              <TableCell >
                <IconButton color="error" onClick={()=>handleDelete(index)}> <DeleteIcon /> </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
    <div>
    <Container sx={{display:'flex',flexDirection:'column' ,justifyContent:'right',alignContent:'left',paddingY:4 ,width:450,backgroundColor:'#fdebe1'}}>
    <Typography gutterBottom variant="h5" textAlign={"center"} >
          Order summary <hr/>
        </Typography>
        
        <Container sx={{display:'flex'}}>
        <Typography gutterBottom variant="h6" marginRight={1}>
          Total Itemes
        </Typography>
        <Typography gutterBottom variant="h6"  color='#814407' >
            {sum}
        </Typography>
        </Container>
    <Container sx={{display:'flex'}}>
       <Typography gutterBottom variant="h6" marginRight={1}>
          Return Date
        </Typography> <Typography gutterBottom variant="h6" marginRight={3} color='#814407'>
         { new Intl.DateTimeFormat('en-EG' , dateFormate).format(value)}
        </Typography>
        <Button variant="contained" sx={{backgroundColor:"#e0b283" ,marginBottom:2}} onClick={handleOpen}>Pick Date</Button>
        <Modal
         open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
         <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
             label="Pick The Day"
              value={value}
              onChange={handleDate }
          />
         </LocalizationProvider>
        </Box>
      </Modal>
      </Container>
    <FormControlLabel required control={ <Checkbox color="success"
      checked={checked}
      required
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />} label="By proceeding, you acknowledge that you have read and agree to the Terms and Conditions, Privacy Policy, and Return Policy." sx={{color:'text.secondary'}}/>
  
  <Button sx={{backgroundColor:"#e0b283" , marginTop: 4}}
          variant="contained"  disabled={!checked}
          onClick={handleContinue} >
            Continue
           
   </Button>
    </Container>
    </div>
    </>
    )}
    </Container> 
    
    </div>
   
)
}

export default CartPage;