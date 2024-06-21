import React from 'react'
import '../../components/about/about.css'
import { aboutme } from '../../images'
export default function About() {
    
  return (
    <>
        <div className='ap-about-me'>
            <img className='mt-32 rounded-3xl shadow-2xl' src={aboutme} alt="" />
        </div>
    </>
  )
}
