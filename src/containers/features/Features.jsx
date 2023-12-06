import React from 'react'
import './features.css'
import { Feature } from '../../components'
import moto from '../../assets/h2r.png';

const Features = () => {
  return (
    <div className='responsive__features section__padding' id="features">
      <div className='responsive__features-heading'>
        <h1 className='gradient__text'>
          What kind of motorcycles suits you?
        </h1>
        <p>Nobody cares about electric motorcycles!</p>
        <div className='responsive__features-image'>
          <img src={moto} alt="moto" />
        </div>
      </div>
      <div className='responsive__features-container'>
        <Feature title = "Naked bikes" text="Naked bikes, or standard motorcycles, are a category known for their minimalist design and lack of extensive fairings. Key features include:an exposed engine,upright riding,versatile,agile and stripped-down design for a direct and immersive riding experience" />
        <Feature title = "Supersport bikes" text="Supersport bikes are high-performance motorcycles designed for speed and agility. They feature aerodynamic fairings, powerful engines, and a sporty riding position. Known for precision handling, they are optimized for track racing and offer advanced braking and suspension systems." />
        <Feature title = "Adventure bikes" text="Adventure bikes are versatile motorcycles built for on- and off-road exploration. They feature a robust chassis, long-travel suspension, and upright ergonomics. With powerful engines, large fuel tanks, and luggage options, they excel in long-distance touring and various terrains." />
        <Feature title = "Cruiser bikes" text="Cruiser bikes are comfortable, laid-back motorcycles with a relaxed riding position. They feature a classic design, wide handlebars, low-slung frames, and large, cushioned seats. Cruisers prioritize a smooth ride and are ideal for leisurely, open-road cruising." />
        <Feature title = "Touring bikes" text="Touring bikes are designed for long-distance travel, prioritizing comfort and luggage capacity. Features include spacious seating, wind protection, and often, built-in storage options. Ideal for extended journeys on highways and varied road conditions." />
        <Feature title = "Choppers" text="Choppers are custom motorcycles known for unique designs. Key features include extended forks, low frames, high handlebars, and often, modified engines. Distinctive for their rebellious style and minimalist aesthetic." />
        </div>
    </div>
  )
}

export default Features