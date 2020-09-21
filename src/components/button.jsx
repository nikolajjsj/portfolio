import React from 'react'
import './button.css'

export default function Button({ onClick, title }) {
  return <button className="my-button" onClick={onClick}>{title}</button>
}
