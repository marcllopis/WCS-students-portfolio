import React from 'react';
import './StudentList.css';
import { Context } from '../../../Context/Provider';
import {Link} from 'react-router-dom'

const StudentList = () => {
  const { state } = React.useContext(Context);
  return (
<div className="card-students">
        <h3 className="h3-card-title">{state[0].name}</h3>
        <img  className="img-card" src="https://cdn4.vectorstock.com/i/1000x1000/52/83/default-placeholder-profile-icon-vector-14065283.jpg" 
        alt="student photo" />
  
      <div className="info" >
          <div className="box-info" >
              <p>Age: {state[0].age}</p>
              <p>Nationality: {state[0].nationality}</p>
              <p>Languages: {state[0].languages}</p>
              <p className="short-descriptor">Short desription. Really!</p>
             
          </div>
           
           <button className='btn-student'>
            <Link to='/students'>See more</Link>
          </button> 

      </div>
      </div>
  )
};
 export default StudentList     