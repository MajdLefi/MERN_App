import React from 'react'
import logofb from '../../../images/logofb.jpg'
import logoinsta from '../../../images/logoinsta.jpg'
import logolink from '../../../images/logolink.png'
import './FollowUs-style.css'
const FollowUs = () => {
    return (
        <div>
            <div>
                <h1 className="title">FollowUs</h1>
                <img src={logofb}/>
                <img src={logoinsta}/>
                <img src={logolink}/>
            </div>
        </div>
    )
}

export default FollowUs
