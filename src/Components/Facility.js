import React, { Fragment } from 'react'
import '../scss/Facility.scss'
import { FiTruck } from 'react-icons/fi'
import { facility } from './Data'
const Facility = () => {
    return (
        <Fragment>

            <div className='facility-grid'>

                {
                    facility.map((curElem) => {
                        return (
                            <div className='facility-item'>
                                <div className='icons'>
                                    {curElem.icons}
                                </div>
                                <div>
                                    <h6>{curElem.h2}</h6>
                                    <p>{curElem.p}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </Fragment>
    )
}

export default Facility