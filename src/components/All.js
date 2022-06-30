import React from 'react'

export const About = () => {
  return (
    <>
        <div className='about-first'>
            <div className='about-second'>
                <h1>Uma's Paintings</h1>
                <p>Check out our lead protagonist Umas paintings here. <br /> 
                If you love them, get a hand painted one from her</p>
            </div>
        </div>
    </>
  )
}
export const Mani = () => {
  return (
    <>
    <div className='main-all'>
        <div className='mani-first'>
            <div className='mani-second'>
                <h1>50% of the money generated will be spent on coral rehabilitation. This is our pledge.</h1>
            </div>
            <div className='mani-first1'></div>
        </div>
    </div>
    </>
  )
}
export const Watch = () => {
  return (
    <>
    <div className='watch-first'>
        <div className='watch-second'>
            <h1>ABOUT UMA MANI</h1>
            <p>A filmmaker's journey with Uma, a certified scuba diver, <br /> exploring the underwater world and the threat to coral.  
            <br />
            A homemaker from Tamil Nadu, who, through her paint, <br /> has been trying to draw public attention to the devastat <br /> effects of climate change on marine life and the coasta <br /> communities.
            It is, in fact, her love for corals that inspire <br /> Uma to learn how to swim, dive and paint in her 50s</p>
            <div className='btn'>
                <button>Watch Video</button>
            </div>
        </div>
        <div className='watch-img'>
            <img src="./img/watch.png" alt="" />
        </div>
    </div>
    </>
  )
}

export const Building = () =>{
  return(
      <div className='adress'>
          <h2>Billing address</h2>
          <p>Lorem ipsum dolor sit amet consectetur ipsum dolor.</p>
      </div>
  )
}
export const Button = () =>{
  return(
    <div className='button-one'>
        <div className='button-twoo'>
            <button className='button-first'>Complete order</button>
        </div>
        <div className='button-two'>
            <button className='button-firstt'>Return to shiping</button>
        </div>
    </div>
  )
}