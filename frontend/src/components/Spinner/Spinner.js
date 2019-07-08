import React from 'react';



const spinner = () => (
  <div className="spinner">
    <div className="lds-dual-ring" />
    
  <style jsx>{`
  .spinner {
  display: flex;
  justify-content: center;
  align-items: center;
}

.lds-dual-ring {
  display: inline-block;
  width: 64px;
  height: 64px;
}
.lds-dual-ring:after {
  content: ' ';
  display: block;
  width: 46px;
  height: 46px;
  margin: 5px;
  border-radius: 50%;
  border: 5px solid #058b80;
  border-color: #058b80 transparent #058b80 transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

    
    `}

  </style>
  </div>

);

export default spinner;
