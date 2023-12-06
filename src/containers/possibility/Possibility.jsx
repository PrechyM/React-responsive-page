import React from 'react'
import './possibility.css'
import possibilityImage from '../../assets/motogp.png';

const Possibility = () => {
  return (
    <div className='responsive__possibility section__padding' id='possibility'>
      <div className='responsive__possibility-image'>
        <img src={possibilityImage} alt='possibility' />
      </div>
      <div className='responsive__possibility-content'>
        <h4>For all the racers,there are some rules that your motorcycle needs to fullfill!</h4>
        <h1 className='gradient__text'>What motocycles I recommend and regulations for A2</h1>
        <p>For Romania your motorcycle engine should have under 70kw by factory and limited to maximum 35kw and a weight/power ratio of maximum 0.2kw. </p>
        <p>I recommend after you choose and test more motocycle types, to test a few motorcycle models in that category. For example at supersport/sport-touring: Kawasaki zx4rr,Ktm Rc390,Yamaha R4/R3,Cfmoto 500sr/450sr,Honda Cbr500rr/300rr,Aprilia RS457</p>
      </div>
    </div>
  )
}

export default Possibility