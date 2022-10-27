import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Done = (props) =>{
    const del =() =>{
        props.DoneDel(props.doneList)
    }
    return(
        <div className='list_item' style={{backgroundColor:'green'}}>
            <h2>{props.doneList}</h2>
            <h3 onClick={del}> <FontAwesomeIcon icon={faTrash} /> </h3>
        </div>
    );
}

export default Done