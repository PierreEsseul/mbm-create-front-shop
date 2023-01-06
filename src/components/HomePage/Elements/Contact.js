import React from 'react';

const Contact = () => {
    return (
        <div id='contact' className='home-page__contact'>
            <div className='contact__mail'>helle@madebyme.app</div>
            <div className='home-page__contact-logo'>
                <a href="https://www.linkedin.com/company/made-by-me-online-store/?viewAsMember=true" target='_blank'><img src="/img/icon/linkedin.svg" alt="logo linkedin madebyme" /></a>
                <a href="https://www.facebook.com/madebyme.onlinestore" target='_blank'><img src="/img/icon/facebook.svg" alt="logo facebook madebyme" /></a>  
                <a href="https://www.instagram.com/madebyme.onlinestore/" target='_blank'><img src="/img/icon/instagram.svg" alt="logo instagram madebyme" /></a>            
            </div>
        </div>
    )
};

export default Contact;