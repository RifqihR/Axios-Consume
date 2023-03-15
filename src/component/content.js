import React from 'react'
import Img from '../assets/pic/Ricon.png'
import "../assets/pag1.css"
import cntImg from "../assets/pic/1.webp"

export default function Content() {
  return (
    <div className='content'>
        <div className='cntHeader'>
            <img className='icon' src={Img} alt=""/>
            <div className='text'>
                <p className='headtxt'>Menu 1</p>
                <p className='headtxt'>12-12-2012</p>
            </div>
        </div>
        <div className='cntBoddy'>
            <img className='Imgcnt' src={cntImg} alt=""/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
    </div>
  )
}
