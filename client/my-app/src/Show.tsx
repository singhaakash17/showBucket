import { Grid ,Button} from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Show.css';
import {Rating} from 'react-simple-star-rating'

function Show({showId,review,title,rating,app}:{showId:any,review:any,title:any,rating:any,app:any}) {
  
  const[showMore,setShowMore]=useState(false);
  const Token= localStorage.getItem("token");
  
  async function handleDelete(){
    const response=await axios.delete('api/show/'+showId,{
      headers:{
        'x-access-Token' : `${Token}`
      }
    });
    console.log(response)
  }

  return (
    
    <Grid item className='Grid' style={{border:"1px solid black",position:'relative',margin:"20px",width:'25%',height:'25%'}}>
                
        <ul className="no-bullet">
            <div>
            <li>Title:{title}</li>
            <li>Rating:<Rating allowHalfIcon={true}
        readonly={true}
        size={20}
        ratingValue={rating}
        iconsCount={10}
        transition
        fillColor='orange'
        emptyColor='gray'
      />    </li>
            <li>Streaming App: {app}</li>
            <li><>Review:{showMore ? {review}:`${review.substring(0,250)}` }
            </>
            </li>
            </div>
            <div style={{display:'flex',position:'absolute',bottom:'0'}}>           
            <li><button type="submit" onClick={(e)=>{handleDelete()}}><Link to="/show" style={{textDecorationLine:'none',display:'flex'}}>Delete</Link></button></li>
            <li><button type="submit"><Link to='/add' state={showId} style={{textDecorationLine:'none',display:'flex'}}>Update</Link></button></li>           
            </div>
        </ul>
            
              
    </Grid>
    
    )
}

export default Show