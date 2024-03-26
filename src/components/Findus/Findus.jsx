import React from 'react'
import './Findus.css'

const Findus = () => {
    return (
        <div className='find-us' id='findus'>

            <h1>Find Us on Google Map</h1>

            
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d20954.793644201465!2d85.38442868389761!3d27.676337729703445!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1b000937bf9b%3A0x8ad161e52b1352e!2sBaby%20Villa%20Montessori%20School!5e0!3m2!1sen!2snp!4v1710861378708!5m2!1sen!2snp"
                width="90%"
                height="450"
                style={{ border: '0' }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">

                </iframe>
            


        </div>
    )
}

export default Findus
