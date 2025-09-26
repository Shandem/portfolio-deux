import React from 'react'
import CardShowcase from '../Card/CardShowcase.js'
import './Showcase.scss'

export default function showcase() {
  return (

    <section>
        <div className="ShowcaseTitle">Title of the section //Props </div>
        <p className="ShowcaseDetails"> here is where i can say a few things about the3 section at hand </p>

        <div className="sectionContainer">
        
            <ul className="sectionContainerlist">

                <li><CardShowcase/></li>
                <li><CardShowcase/></li>
                <li><CardShowcase/></li>
                <li><CardShowcase/></li>
          
            </ul>

        </div>

        <p>Closing statements</p>

    </section>

  )
}
