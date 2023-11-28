import React from 'react'

import {Blog,Features,Footer,Header,Possibility,Responsive} from './containers'
import {Brand,CTA,Navbar} from './components'
import './App.css'

const App = () => {
  return (
    <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Brand />
    <Responsive />
    <Features />
    <Possibility />
    <CTA />
    <Blog />
    <Footer />
</div>
  )
}

export default App