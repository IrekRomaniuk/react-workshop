import React from 'react'
 
function Contactlist(props) {
    return (
        <div>
            <header><h3>{ props.item.name }</h3></header>
            <p>
                { props.item.email }
            </p>
            <p>
            <span>{ props.item.phone }</span>
            </p>
        </div>
    )
}
 
export default Contactlist;