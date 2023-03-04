import React from 'react';
// либа classNames помогает стилизовтаь кнопку
import classNames from 'classnames'
import './button.css';

export const Button = ({ 
    onClick, 
    type, 
    children, 
    size = 's' }) => {

// с помощью либы classNames ого принимает обьект с классами
// комп Button переиспользуемый, поэтому так удобно
        const btnClass = classNames({
            'btn':true,
            'btn--secondary': type === 'secondary',
            'btn--primary': type === 'primary',
            'btn--small': size === 's',
            'btn--medium': size === 'm'
        });
    return (

<button className={btnClass} onClick={onClick}>
    {children}
</button>

    )
}

