import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Avatar} from '@material-ui/core'  
import { Link } from 'react-router-dom';


function Header() {
    return (
        <div className="header">
            <Link to="/"> <img className="header__icon"
           src=
           "data:image/png;base64,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" alt="" />
           </Link>
         <div className="header__center">
    <input type="text"></input>
    <SearchIcon />
</div>
<div className="header__right">
  <p>Become a Host</p>  
  <LanguageIcon></LanguageIcon>
  <ExpandMoreIcon></ExpandMoreIcon>
  <Avatar></Avatar>
</div>
        </div>
    )
}

export default Header
