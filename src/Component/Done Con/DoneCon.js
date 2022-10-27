import './DoneCon.css';
import React from 'react';
import Done from './Done/Done';

const DoneCon = (props) =>{
    const deleted = (gotDeleted) =>{
        props.delItemToApp(gotDeleted)
    }
    return(
        <div className='list_done'>
        <h1>Task DONE !</h1>
        {
            props.appToDone.map((finalDone)=>(finalDone.stage===1)? <Done DoneDel={deleted} key={Math.random()} doneList={finalDone.task} />:null)
        }
        
        
       
       
   </div>
    );
}

export default DoneCon;