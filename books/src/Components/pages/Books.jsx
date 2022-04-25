import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { BookCard } from "./BookCard";
import styled, { css } from "styled-components";

export const Grid = styled.div`
//  add required style here
 display:grid;
 grid-template-columns:repeat(2,1fr)
`;

const Books = () => {
  const [data, setData] = useState([]);
  const getData = async() =>{
    let res = await fetch(`http://localhost:8080/books`)
    let books = await res.json();
    console.log(books)
    setData(...data,books)
  }
  useEffect(() => {
    // make a GET request to http://localhost:8080/books to get all the books data
    getData();
  }, []);

  return (
    <>
      <h1>Books</h1>
      <Grid data-testid="books-container">
        {/* {!!data && 
          // map thorugh the data and use <BookCard/> component to display each book
          } */}
          {data.map((el)=>
           {
             return(
              <BookCard key={el.id} value={el} />
             )
           }
          )}
      </Grid>
    </>
  );
};
export default Books;
