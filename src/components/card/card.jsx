import React from 'react'
import '../../components//card/card.css'
import { html } from '../../images'
import {arrow} from '../../images'
 

const Card = ({title, description})  =>{
  return (
    <>
    <div className='ap-card card p-0 md:w-3/12 w-full   z-10 relative'>
        <div className='ap-card-wrp card-inner'>
          <div className='box'>
            <div className='imgBox'>
              <img src={html} alt="" />
            </div>
            <div class="icon">
              <a href="#" class="iconBox"> <img src={arrow} alt="" /></a>
          </div>
            {/* <div>
                <div className='ap-card-heading font-sans text-4xl py-10 text-white'>{title}</div>
                <p className='ap-card-discription font-sans text-lg py-10 text-white'>{description}</p>
            </div> */}
          </div>
        </div>
    </div>
    
  </>
  )
}

export default Card
