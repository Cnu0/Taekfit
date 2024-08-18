import React from 'react'
import aboutimage from '../images/photo_2024-08-14_07-12-41.jpg'
function About() {
  return (
    <div id='about'>
        <div className='about-image'>
            <img src={aboutimage} alt=''/>
        </div>
        <div className="about-text">
            <h1>LEARN MORE ABOUT US</h1>
            <p>we are dedicated to promoting the art of Taekwondo and instilling values of discipline, respect, and perseverance. Our experienced instructors provide a supportive environment where students of all ages can grow and thrive.</p>
<button>READ MORE</button>
        </div>
    </div>
  )
}

export default About