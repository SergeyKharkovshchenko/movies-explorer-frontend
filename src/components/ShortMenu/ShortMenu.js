import React from 'react';
import { Link } from "react-router-dom";
import './ShortMenu.css';
import { Button } from '../Button';

import {
    main,
    profile,
    movies,
    savedMovies
  } from '../../utils/config';

export const ShortMenu = ( {width320} ) => {

    const items = [main, movies, savedMovies];

    return(
        <div className='register'>
<div className="menu__content">        
 <ul className="menu__menu">
     {items.map(item=>
     <li key={item.id} className="menu__link-wrapper">
         <Link to={`${item.link}`} className="menu__link">{item.name}</Link>
     </li>
     )} 
 </ul>        
 <Link to={profile.link} className={width320?"menu__footer_short":"menu__footer_long"}>
 <Button name={profile.name}  color={'lightgrey'} isActive='true' />
 </Link>
</div>
        </div>
    )
}




 