import React from 'react'
import Button from '../button/button'
import '../banner/banner.css'
import { strock } from '../../images'
import { abhinav } from '../../images'
import { quote } from '../../images'
import { star } from '../../images'
import Mywork from '../MyWork/Mywork'
import About from '../about/about'
export default function Banner() {
const starsArray = Array(5).fill(0);
  return (
    <>
        <div className=' mx-auto'>
          <div className='pt-10 ps-10 pr-10  pb-0'>
            <div className='relative flex justify-center ap-btn-wrp w-fit mx-auto'><img className='absolute' src={strock} alt="" /><Button/></div>
            <div className='ap-text-wrp relative'> <h1 className='text-center py-14 font-sans md:text-9xl text-2xl relative w-fit m-auto'>I'm <span >Abhinav</span><br/>Front-end Engineer <img className='absolute md:-left-36 -left-16 -bottom-2 md:-bottom-11' src={strock} alt="" /></h1></div>
            <div className='flex justify-between md:pt-40 pt-20 flex-wrap'>
                <div className='lg:w-1/5 w-full md:order-1'><img className='ap-quote-img w-12' src={quote} alt="" /><p className='text-xl font-sans font-bold pt-5'>Abhinav's Exceptional Frontend Skills ensure our website's success Highly Recommended</p></div>
                <img className='lg:w-2/4 w-full ap-profile-pic md:order-2 order-3' src={abhinav} alt="" />
                <div className='lg:w-1/5 w-full md:order-3 order-2'><div className='ap-star-wrp flex gap-2 md:p-0 pt-7 pb-7'>{starsArray.map((_, index) => (
              <img key={index} className='ap-star-img w-12 ' src={star} alt={`Star ${index + 1}`} />
            ))}</div> <p className='flex flex-col'><span className='text-5xl pt-5 font-bold'>3 Years</span> <span className='text-center text-xl font-bold'>Proven Experience</span></p></div>
            </div>
          </div>  
          <div className='md:ps-20 md:pr-20 md:pb-20 pt-0'>
            <Mywork/> 
          </div>  
        </div>
    </>
  )
}
