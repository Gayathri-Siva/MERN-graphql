import React from 'react';


const eventItem = props => (
  <div className="container">  
  <li key={props.eventId}>
          <div className="row">
            <div className="col m12">
            <div className="col s12">
      <h5>{props.title}</h5>
      <p>
      &#x20B9;  {props.price} - {new Date(props.date).toLocaleDateString()}
      </p>
      {props.userId === props.creatorId ? (
        <p className="right">Your the owner of this event.</p>
      ) : (
        <button className="btn waves-effect teal right" onClick={props.onDetail.bind(this, props.eventId)}>
          View Details
        </button>
      )}
                              
            </div>    
      </div>
    </div>
  </li>
    <hr/>  
  </div>
);

export default eventItem;
