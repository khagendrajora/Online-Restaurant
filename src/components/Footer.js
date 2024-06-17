import { faYoutube, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faMailBulk } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className='sub-footer'>

                    <div className='left'>
                        <div className='img'>
                            <img src='/logo.png' alt='logo' />
                        </div>
                    </div>

                    <div className='right1'>


                        <div className='center'>
                            <h1> Site Map</h1>
                            <div className='terms'>Business</div>
                            <div className='terms'>Products</div>
                            <div className='terms'>Gallary</div>
                            <div className='terms'>Contact</div>
                            <div className='terms'>Support</div>
                        </div>

                        <div className='right'>
                            <input type='text' className='form-control' name='email' id='email' placeholder='Email' />
                            <button className='subscribe '>SUBSCRIBE</button>

                            {/* <div className='map'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.2404025824158!2d85.31490669999998!3d27.709862800000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb193edf6bd2af%3A0x44ac26fce7c33d8c!2sDursikshya%20Education%20Network!5e0!3m2!1sen!2snp!4v1714315045714!5m2!1sen!2snp" width="80" height="50" style={{ border: '0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div> */}

                        </div>
                    </div>
                </div>
                <div className='social-media'>
                    <FontAwesomeIcon icon={faFacebook} className='f-icon' size='1x' />&nbsp;&nbsp;
                    <FontAwesomeIcon icon={faTwitter} className='f-icon' size='1x' />&nbsp;&nbsp;
                    <FontAwesomeIcon icon={faMailBulk} className='f-icon' size='1x' />&nbsp;&nbsp;
                    <FontAwesomeIcon icon={faYoutube} className='f-icon' size='1x' />
                </div>
                <hr className='text-white' />
                <p className='text-white d-flex justify-content-center'>CopyRight &copy; 2024</p>
            </div >

        </>
    )
}
