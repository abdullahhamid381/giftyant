import React from 'react'
import '../scss/Facility.scss'
import { FaPaperPlane } from 'react-icons/fa'
import { BsCurrencyDollar } from 'react-icons/bs'
import { facility } from './Data'
const Facility = () => {
    return (
        <div className='facility-parent'>
            <div className='grid'>

               {
                facility.map((map)=>{
                    return(
                        <div className='freeshiping'>
                        <div className='icons'>
                            {map.icons}
                        </div>
                        <div>
                            <h2> {map.h2}
                               
                            </h2>
                            <p> {map.p}</p>
                        </div>
    
                    </div>
                    )
                })
               }

               
            </div>

        </div>
    )
}

export default Facility