import React from 'react'
import './blog.css'
import { Article } from '../../components'
import {blog01,blog02,blog03,blog04,blog05} from './imports'

const Blog = () => {
  return (
    <div className='responsive__blog section-padding' id='blog'>
      <div className='responsive__blog-heading'>
        <h1 className='gradient__text'>A lot is happening in the motorcycle world, Find out what!. </h1>
      </div>
      <div className='responsive__blog-container'>
        <div className='responsive__blog-container_groupA'>
          <Article imgUrl={blog01}  date='12 Dec, 2023'  title='New Cfmoto 675sr' text='The 675SR is a three-cylinder supersport machine using the inline-triple engine that we first revealed back in March. Patents for the engine show it’s closely related to the 450cc twin used in the 450SS (which is sold as the 450SR outside the US, matching the “SR” designation of the new 675) with an extra cylinder to bring it to 675cc. That’s a favored capacity for triples, largely due to old racing regulations that let 675cc three-cylinder bikes compete against 600cc fours but also because it hits a sweet spot between size and performance.'/>
          </div>
          <div className='responsive__blog-container_groupB'>
          <Article imgUrl={blog02}  date='12 Dec, 2023' title='New Aprilia Rs457'/>
          <Article imgUrl={blog03}  date='12 Dec, 2023' title='New Kawasaki Zx4rr'/>
          <Article imgUrl={blog04}  date='12 Dec, 2023' title='New Honda Hornet 1000'/>
          <Article imgUrl={blog05}  date='12 Dec, 2023' title='What is the best naked bike in 2024?'/>
          </div>
        </div>
      </div>
  )
}

export default Blog