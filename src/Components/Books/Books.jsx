import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './Books.css'
import { Link } from "react-router-dom";
import { useDispatch,useSelector } from 'react-redux';




const Books = () => {

    const [books,setBooks]= useState([]);

    const fetchBooks = async ()=>{
        try {
            const response = await axios.get('https://fakestoreapi.com/products')
            console.log(response.data);
            
        setBooks(response.data)
        } catch (error) {
            console.log(error); 
        }
        
    }

    useEffect(()=>{
        fetchBooks()
    },[])

    const buttonClick = ()=>{
      
    }


  return (
    <div className='books-container'>
        <div className="books">
        {books.map((book)=>(
                <div key={book.id} className='single-book'>
                   <div>
                    <img src={book.image} alt="" />
                   </div>
                   <h4>{book.title}</h4>
                   <Link to="/books">
                      <button onClick={buttonClick()}>Add To Wishlist</button>
                   </Link>
                </div>
            ))}
          
        </div>
    </div>
  )
}

export default Books