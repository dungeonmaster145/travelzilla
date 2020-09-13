import React,{useState} from 'react'
import './Banner.css'
import {Button} from '@material-ui/core'
import Search from './Search'
import { useHistory } from 'react-router-dom';



function Banner() {

   const[showSearch,setShowSearch]=useState(false);
   const history=useHistory();

   //history is the react hook that redirects us to the 
   //specified page

    
    return (
        <div className="banner">
            <div className="banner__search">
              {showSearch && <Search/>}
                <Button className='banner__searchButton' variant='outlined' 
                onClick={()=>setShowSearch(!showSearch)}>
                    
                
                {showSearch?"Hide":"Search Dates"} 
                </Button>
            </div>
          <div className="banner__info">
              <h1>Get out and stretch your imagination</h1>
              <h5>
                  Plan a different kind of getaway
              </h5>
              <Button variant='outlined'
              onClick={()=>history.push('./search')}
              
              >Explore Nearby</Button>
              </div> 
        </div>
    )
}

export default Banner
