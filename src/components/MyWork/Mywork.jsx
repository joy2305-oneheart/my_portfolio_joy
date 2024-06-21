import React from 'react'
import { orange} from '../../images'
import '../../components/MyWork/Mywork.css'
import Card from '../card/card'
import { seo } from '../../images'
import { html } from '../../images'
import { responsive } from '../../images'

export default function Mywork() {
  const data = [
    { id: 1, title: 'Web Development', description: 'I have 3 year of experince in web development with good knowledge of latest web technologies.' ,imgSrc:html },
    { id: 2, title: 'UI/UX Development', description: 'Want to make a Unique UI for portal , website  and portfolio. Yes you are in the right place', imgSrc:seo },
    { id: 3, title: 'Poster Development', description: 'Not able to decide what should come first in your poster design or not able to stand out in your design.', imgSrc:responsive }
  ];
  return (
    <>

      <div className='ap-work-wrp relative flex justify-around align-middle -mt-6 md:py-24 md:px-20 px-5 py-20 flex-col'>
          <img className='w-full h-full ap-dark-bg rounded-3xl scroll  absolute inset-0' src={orange} alt="" />
          <h2 className='md:text-7xl text-4xl z-10 font-sans text-white font-semibold md:pb-20 pb-12'>MY BLOG's</h2>\
          
        <div className='ap-card-wrp flex w-full gap-10 flex-wrap justify-center'>
          {data.map(item => (
                  <Card key={item.id} title={item.title} description={item.description} imgSrc={item.imgSrc}/>
          ))}
        </div>
      </div>  
     
    </>
  )
}
