import React from 'react';
import { HeaderContainer } from './styles';
import logo from '../../assets/logo.png';

interface IHeaderProps {
  title: string;
  bottomPhrase: string;
}

const Header: React.FC<IHeaderProps> = ({ title }: IHeaderProps) => {
  return (
    <HeaderContainer>
        <div className='topbar'><img src={logo} />
        <h1>{title}</h1></div>
    </HeaderContainer>
  );
};

export default Header;
