import React from 'react'

// Props of blip:
// color

function Blip(props) {
  const color = props.color;
    return (
    <div className="blip" style={{backgroundColor:color == "" ? "green" : props.color}}/>
  )
}

export default Blip