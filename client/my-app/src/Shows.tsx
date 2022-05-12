import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios';
import Show from './Show';
import {Container, Grid} from '@material-ui/core';

function Shows() {
    const [shows,setShows]=useState([]);
    const Token= localStorage.getItem("token");

  useEffect(()=>{
        axios.get('api/show',{
            headers:{
              'x-access-token' : `${Token}` 
            }          
        })
        .then((response:any)=>{
            setShows(response.data)
           
        })
        .catch((err: any)=>console.log(err))
  },[shows])
  return (
    <>    
    <Grid container style={{ display:'flex',gridTemplateColumns: '80px 80px 80px 80px',justifyContent:'left',alignItems:'left'}}>
  {shows.map((show:any,index:any)=>(
                <Show key={index} showId={show._id} review={show.review} app={show.streaming_app} title={show.title} rating={show.rating}/>
 
            ))}
    </Grid>   
    </>
  )
}

export default Shows