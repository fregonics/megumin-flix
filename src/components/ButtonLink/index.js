import React from 'react';

function ButtonLink(props) {
    //props => {className: "classe", href: "link pagina"}
    console.log(props);
    return (<a className={props.className} 
               href={props.href}>
                {props.children}
            </a>);
}

export default ButtonLink;