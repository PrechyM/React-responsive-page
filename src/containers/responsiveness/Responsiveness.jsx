import React from 'react'
import './responsiveness.css'
import { Feature } from '../../components'

const Responsiveness = () => {
  return (
    <div className='responsive__about section__margin' id="about">
      <div className='responive__about-feature'>
        <Feature title = "Who is Prechy" text = "I'm a 23 years old student in Bucharest that shares his passion for motorcycles and his progress as well as it's view for the motorcycle world."/>
        </div>
        <div className='responsive__about-heading'>
          <h1 className='gradient__text'>
          I'm just another rider
          </h1>
        </div>
        <div className='responsive__about-container'>
          <Feature title = "First contact" text="It all started in 2018 when a friend got A1 and got his first motorcycle. I got hooked up immediatly and started to look for motorcycles as well as driving schools for when I get to 18 years old " />
          <Feature title = "Begining" text="I joined a motorcycle driving school in 2019 in Bucharest and started my motorcycle journey as well as my youtube channel"/>
          <Feature title = "Present" text="After 30000km+,4 years of riding,2 motorcycles and 4 crashes I still love to ride my bike and I try my best to film/edit/post videos for my viewers"/>
        </div>
        </div>
  )
}

export default Responsiveness