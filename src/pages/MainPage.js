import React from "react";
import Header from "../component/HeaderT";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';
import LottieAnimation from "../component/LottieAnimation";
import book from '../component/animation/book.json'
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { useNavigate } from "react-router-dom";

function MainPage(){

    const navigate = useNavigate();

    return (
        <>
        <Header/>
        <Container sx={{display:'flex' ,marginRight:20 ,height:640 ,justifyContent:"center", alignItems:"center"}}>
            <Container sx={{display:'flex' ,flexDirection:"column",justifyContent:"center", alignItems:"center",textAlign:"center"}}>
            <Typography gutterBottom variant="h4" width={250} marginTop={15}  >
              Dive deep into the world of 
            </Typography>
            <Typography variant="h3" color='#814407'>book!</Typography>
            <Button sx={{backgroundColor:"#e0b283", marginTop: 4}}
              variant="contained" 
              endIcon={<MenuBookIcon/>}
              onClick={()=>navigate('/library')}>
                  Go To Library
            </Button>
            </Container>
        <LottieAnimation lotti={book} height={500} width={500} />
        </Container>
        </>
    )
}

export default MainPage;