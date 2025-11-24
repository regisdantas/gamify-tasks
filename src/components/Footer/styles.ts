
import styled from 'styled-components';

export const FooterContainer = styled.footer`
  position:relative;
  bottom:0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  p{
    font-size: 12px;
    letter-spacing: 7px;
    text-transform: uppercase;
    background: #04D361;
    padding: 6px;
    font-weight: bolder;
    text-align: center;
    width: 100%;
  }
    
  .bottombar{
    width: 100%;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    box-shadow: inset 4px 4px 10px #0099cc, inset -4px -4px 10px rgb(0, 115, 153);
    background: linear-gradient(to bottom, #0099cc 0%, #4fd1ff 100%) !important;
  }
`;
