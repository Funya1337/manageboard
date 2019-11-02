import React from 'react';
export default function Layout(props) {
  return (
    <div>
      <div>
        header
      </div>
      {(prop) => props.children(prop)}
      <div>
        footer  
      </div>
    </div>
  )
}