import React from "react";
import Header from "../component/HeaderT";
import BookCard from "../component/BookCard";
import { books } from "../component/data";
import { Container } from '@mui/material';

function LibraryPage (){
    return (
        <div>
        <Header/>

       <Container sx={{display:"flex" , flexWrap:"wrap" , columnGap:8, rowGap:16 ,marginTop:25 , justifyContent:"center"}}>
       {books.map((book,index) => {
        return<BookCard key={index} book={book} index={index}/>
       })}
      </Container>
   </div>
    )
}

export default LibraryPage;