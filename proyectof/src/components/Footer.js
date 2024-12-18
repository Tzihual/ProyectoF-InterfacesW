import React from 'react';
import styled from 'styled-components';


const FooterS=styled.footer`
 text-align: center;
  color: white;
  margin-top: 20px;
  font-size: 14px;
  opacity: 0.7;
`;

const Footer = () => {
    return(
        <FooterS>
        <p>&copy; 2024 La Butaca Crítica | Todos los derechos reservados.</p>
        </FooterS>
    );

};

export default Footer;