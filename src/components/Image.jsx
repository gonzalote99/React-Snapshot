import React from 'react';

function Image(props) {
  return(
    <li>
    <img src={props.url} alt={props.alt} />
    </li>
  );
}

export default Image;