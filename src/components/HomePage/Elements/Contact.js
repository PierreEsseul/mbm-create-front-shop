import React from 'react';

const Contact = () => {
    return (
        <div id='contact' className='home-page__contact'>
            <div>helle@madebyme.app</div>
            <div className='home-page__contact-logo'>
                <a href="https://www.linkedin.com/company/made-by-me-online-store/?viewAsMember=true" target='_blank'><img src="/img/icon_linkedin.png" alt="logo linkedin madebyme" /></a>
                <a href="https://www.facebook.com/madebyme.onlinestore" target='_blank'><img src="/img/icon_facebook.png" alt="logo facebook madebyme" /></a>  
                <a href="https://www.instagram.com/madebyme.onlinestore/" target='_blank'><img src="/img/icon_instagram.png" alt="logo instagram madebyme" /></a>            
            </div>
        </div>
    )
};

export default Contact;