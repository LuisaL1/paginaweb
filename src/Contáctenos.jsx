// InstagramIcon.jsx
import React from 'react';
import { FaInstagram, FaWhatsapp, FaFacebook } from 'react-icons/fa';

const InstagramIcon = () => {
  const instagramLink = 'https://www.instagram.com/mobvibe_?utm_source=qr&igshid=OGIxMTE0OTdkZA%3D%3D';
  const whatsappLink = 'https://api.whatsapp.com/send?phone=TUNUMERODENUMERO';
  const facebookLink = 'https://www.facebook.com/';

  return (
    <div>
      <a href={instagramLink} target="_blank" rel="noopener noreferrer">
        <FaInstagram size={30} color="white" />
      </a>
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer" style={{ marginLeft: '10px', marginRight: '10px' }}>
        <FaWhatsapp size={30} color="white" />
      </a>
      <a href={facebookLink} target="_blank" rel="noopener noreferrer">
        <FaFacebook size={30} color="white" />
      </a>
    </div>
  );
};

export default InstagramIcon;


