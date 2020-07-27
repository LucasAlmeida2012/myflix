import React from 'react';

function ButtonLink(props){
    // props => { className: "xxx", href: "/"}

    return (
        <a href={props.href} className={props.className}>
            {props.children}
        </a>
    );
}

export default ButtonLink;