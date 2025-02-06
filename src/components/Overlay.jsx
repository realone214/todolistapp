import React from 'react'
import './styles/overlay.css'

function Overlay({closeModal, index}) {
  return (
    <div onClick={()=> closeModal(index)} className='overlay'>Overlay</div>
  )
}

export default Overlay