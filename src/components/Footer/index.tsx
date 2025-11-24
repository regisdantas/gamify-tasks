import React from 'react';
import { FooterContainer } from './styles';

interface IFooterProps {
  footPhrase: string;
}

const Footer: React.FC<IFooterProps> = ({ footPhrase }: IFooterProps) => {
  return (
    <FooterContainer>
        <p className='bottombar'>{footPhrase}</p>
    </FooterContainer>
  );
};

export default Footer;
