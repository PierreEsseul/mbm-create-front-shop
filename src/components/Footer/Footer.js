import React from 'react';

import './Footer.css';

const Footer= () => {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <div className='footer'>
            <p>&copy; {year} by Shunt SAS. <a href="/cgu">CGU</a> - <a href="/legal-mention">Mentions légales</a></p>
        </div>
    )
}

export default Footer;