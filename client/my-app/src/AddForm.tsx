import {Box, Container} from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {Rating} from 'react-simple-star-rating'
import Shows from './Shows'
import './AddForm.css'
import { useLocation } from 'react-router';
function AddForm() {
    const [title, setTitle] = useState("");
    const [streaming_app, setApp] = useState("");
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState("");
    const [message,setMessage] = useState("");
    const [formTitle,setformTitle] = useState("Add")
    let data=useLocation();

    useEffect(()=>{
       
getData();
    },[])
    const getData = async () => {
        //const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
        if(data.state)
        {
        let response = await axios.get("api/show/"+data.state);
        
        let prefillData=response.data;
        setformTitle("Update")
        setTitle(prefillData[0].title)
        setRating((prefillData[0].rating))
        setReview(prefillData[0].review)
        setApp(prefillData[0].streaming_app)
        console.log(prefillData[0].rating)
    }
        //console.log(data)
      }
    const handleRating = (rate:any) => {
        
        setRating(rate);
    }
   async function handleSubmit(e:any){
    e.preventDefault();

    const payload={
        title,
        streaming_app,
        rating,
        review

    }
    if(formTitle==="Add"){
    try{
    
    const response=await axios.post('api/show',payload);
    console.log(response)
    if(response.status==200){
        setMessage(response.data.message)
        setTitle("")
        setApp("")
        setRating(0)
        setReview("")
        setTimeout(function(){
            window.location.href = '/show';
         }, 2000);
    }    
}
catch(e:any){
        console.log("Could not add show")
        setMessage("Could not add Show/Movie")
}
}
else{
    try{
    
        const response=await axios.put('api/show/'+data.state,payload);
        if(response.status==200){
            setMessage(response.data.message)
            setTitle("")
            setApp("")
            setRating(0)
            setReview("")
            setTimeout(function(){
                window.location.href = '/show';
             }, 2000);
        }    
    }
    catch(e:any){
            console.log("Could not Update Show/Movie")
            setMessage("Could not Update Show/Movie")
    }
}
}
            return (
    <>
    <Container maxWidth='sm' fixed style={{height:'350px', backgroundColor: '#cfe8fc',display:'flex', border:'2px solid orange',justifyContent: 'center', alignItems: 'center',marginTop:'100px'}}>
    
    <form onSubmit={handleSubmit} style={{fontFamily: "'Trebuchet MS',sans-serif"}}>
    <h3 style={{textAlign:'center'}}>{formTitle} Show/Movie</h3>
    <label>Title of Movie/Show:</label>
      <input
        type="text" 
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
/>
    <label>Streaming App:</label>
      <input
        type="text" 
        value={streaming_app}
        onChange={(e) => setApp(e.target.value)}
        required
      />    
      <label>Rating:</label>
      <Rating allowHalfIcon={true}
        onClick={handleRating}
        size={20}
        ratingValue={rating}
        iconsCount={10}
        transition
        fillColor='orange'
        emptyColor='gray'
      />    
      <label>Review:</label>
      <textarea
         maxLength={250}
         cols={40}
         rows={4}
        value={review}
        onChange={(e) => setReview(e.target.value)}
      required/>
 <button style={{display:'flex',cursor:'pointer',justifyContent:'center',alignItems:'center', margin:'0 auto'}} type="submit">Submit</button>
  
  </form>


  </Container>
    <p style={{color:'red',display:'flex',justifyContent:'center',alignItems:'center'}}>{message}</p>
    </>
    )
}

export default AddForm

