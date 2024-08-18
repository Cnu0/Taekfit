import React from 'react';
import Featurebox from './Featurebox';
import fimage1 from '../images/cute.jpg'
import fimage2 from '../images/photo_2024-08-14_07-13-50.jpg'
import fimage3 from '../images/qd.jpg'
import fimage4 from '../images/download.jpeg'


function Feature() {
  return (
    <div id ='features'>
        <h1>FEATURES</h1>
        <div className='a-container'>
            <Featurebox image={fimage1} title="Children's Taekwondo"explain="A fun and engaging program designed for kids, promoting fitness, discipline, and respect while teaching essential martial arts skills."/>
            <Featurebox image={fimage2} title="Technique Training" explain="Focus on perfecting your kicks, punches, and blocks, enhancing your form and precision to elevate your martial arts abilities." />
            <Featurebox image={fimage3} title="Self-Defense Training" explain="Learn practical self-defense techniques to empower yourself with the skills and confidence to handle real-life situations effectively."/>
            <Featurebox image={fimage4} title="Black Belt Preparation" explain="An intensive program aimed at preparing students for their black belt tests, focusing on advanced techniques, mental discipline, and leadership skills."/>

        </div>
    </div>
  )
}

export default Feature