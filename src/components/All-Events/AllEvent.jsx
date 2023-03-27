// Path of this file- src/components/home/

import React from 'react'
import './Event.css'
function Event() {
  return (
    <div className='event'>
        <div className="centerWrap">
            <div className="title">
                Events
            </div>
            <div className="cards-container">
                <div className="card-wrap">
                    <div className="card bg bg-1">
                        <div className="card-title">
                            Event Name 1
                        </div>
                    </div>
                </div>
                <div className="card-wrap">
                    <div className="card bg bg-2">
                    <div className="card-title">
                            Event Name 2
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Event