import React from 'react';
import './Project.scss';

const iconList = (props) => {
    return (
        <a href={ props.url } 
            target="_blank" 
            rel="noopener noreferrer"
            className={props.linkClassName} >
                <img src={process.env.PUBLIC_URL + `${ props.img }`}
                    alt={ `Icon of ${props.linkClassName}`}
                    className={props.imgClassName}
                    /> 
                    { props.linkText}
                    </a>
            
    );
}

export default iconList;
