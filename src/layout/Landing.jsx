import React, { useEffect } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger) 

const Landing = () => {

    useEffect(()=>{

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#landing",
                start: "top top",
                end: "bottom top",
                scrub: true
            }
        })

        gsap.utils.toArray(".layer").forEach(layer =>{
            const speed = layer.dataset.speed;
            const movement = -(layer.offsetHeight * speed)
            tl.to(layer, {y: movement, ease: "none"}, 0)
        })
    }, [])

  return (
    <div id='landing'>
        <div className='layer bg' data-speed="0.7"></div>
        <div className='layer overlay' data-speed="0.1"></div>
        <div className='layer logo' data-speed="0"></div>
        <div className='layer bottom' data-speed="0.3"></div>
        <div className='layer scrolldown' data-speed="0">
            <h1>Scroll</h1>
            <svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" viewBox="0 0 24 24"><path fill="#fff" d="m12 19l-6-6l1.4-1.4l4.6 4.575l4.6-4.575L18 13zm0-6L6 7l1.4-1.4l4.6 4.575L16.6 5.6L18 7z"/></svg>
        </div>
    </div>
    
  )
}

export default Landing