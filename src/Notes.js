import React from 'react';
import Note from './Note'

const Notes = props => (
  <div>
    {
      props.items.map((item, index) => <div className="cardMain" key={index}>
          <Note item={item} />
      </div>)
    }
  </div>
);

export default Notes;