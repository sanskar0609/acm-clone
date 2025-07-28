import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import UpcomingEvents from '../components/UpcomingEvents'
import CoreBoard from '../components/CoreBoard'
import FAQ from '../components/FAQ'
import Contact from '../components/Contact'

export default function Home() {
    return (
        <div className='min-w-screen overflow-hidden'>
            <Hero />
            <UpcomingEvents />
            <About />
            <CoreBoard home={true} />
            <FAQ />
            <Contact />
        </div>
    )
}

