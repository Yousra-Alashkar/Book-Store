import React  from "react";
import { Container } from "@mui/material";
import Typography from '@mui/material/Typography';
import { useSelector } from "react-redux";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CardMedia from '@mui/material/CardMedia';

function Summary (){

    const personalInformation = useSelector((state) => state.personal.personal);
    const cardInformation = useSelector((state) => state.LibraryData.LibraryData);
    const cartItems = useSelector((state) => state.cart.cartItems);
    const totalItems = useSelector((state) => state.cart.count);
    const sum  = Object.values(totalItems).reduce((acc,num) => acc + num ,0)

    const returnDate = useSelector((state) => state.Date.Date);
    const dateFormate = {year:'numeric' , month:'2-digit' , day:'2-digit'};

   console.log(personalInformation)

  
    return(
        <div>
        <Container sx={{display:"flex" ,flexDirection:"column", justifyContent:"center", alignItems:"center" ,gap:8}}>
         <Container sx={{display:"flex" , justifyContent:"center", alignItems:"center" ,gap:4}}>
       
       <div>
            <Typography gutterBottom variant="h6"  color='#814407'>
                Full Name
            </Typography>
            {cardInformation.map((data )=>(
            <Typography gutterBottom variant="p" >
             {data.fullname}
            </Typography>))}
        </div>
        <div>
            <Typography gutterBottom variant="h6"  color='#814407'>
                Email
            </Typography> 
            {personalInformation.map((data )=>(
            <Typography gutterBottom variant="p" >
             {data.email}
            </Typography>))} 
         </div>
         <div>
            <Typography gutterBottom variant="h6"  color='#814407'>
                Phone
            </Typography>
            {personalInformation.map((data )=>(
            <Typography gutterBottom variant="p" >
             {data.phone}
            </Typography>))}
        </div>
        <div>
            <Typography gutterBottom variant="h6"  color='#814407'>
                Card Number
            </Typography>
            {cardInformation.map((data )=>(
            <Typography gutterBottom variant="p" >
             {data.cardnumber}
            </Typography>))}
        </div>
        <div>
            <Typography gutterBottom variant="h6"  color='#814407'>
                Total Items
            </Typography>
            <Typography gutterBottom variant="p" >
             {sum}
            </Typography>
        </div>
        <div>
            <Typography gutterBottom variant="h6"  color='#814407'>
                Return Date
            </Typography>
            <Typography gutterBottom variant="p" >
             {/* { new Intl.DateTimeFormat('en-EG' , dateFormate).format(returnDate)} */}
            
            </Typography>
        </div>

            </Container>
<div>
    <TableContainer sx={{width:800}} component={Paper}>
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
            </TableRow>
          ))}
         
        </TableBody>
      </Table>
    </TableContainer>
    </div>

</Container>
       </div>
    )
}

export default Summary;

