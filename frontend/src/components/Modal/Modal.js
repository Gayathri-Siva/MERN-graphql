import React from 'react';

import './Modal.css';

const modal = props => (
  <div className="modalcontent">
    <header className="modal__header">
      <h1>{props.title}</h1>
    </header>
    <h5 className="modal__content">{props.children}</h5>
    <section className="modal__actions">
      {props.canCancel && (
        <button className="btn" onClick={props.onCancel}>
          Cancel
        </button>
      )}
      {props.canConfirm && (
        <button className="btn" onClick={props.onConfirm}>
          {props.confirmText}
        </button>
      )}
    </section>
  </div>
);

export default modal;
