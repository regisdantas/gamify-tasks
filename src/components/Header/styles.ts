import styled from 'styled-components';


export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align:center;
  p {
    font-size: 12px;
    letter-spacing: 7px;
    text-transform: uppercase;
    background: #FED43A;
    color: #000000;
    padding: 6px;
    font-weight: bolder;
    align-content: center;
  }
  h1 {
  letter-spacing: 56px;
    font-family: 'Press Start 2P';
    font-size: 40px;
    font-weight: bolder;
    text-transform: uppercase;
    color: #FFFFFF;
    align-content: center;
  }
  div {
    display: flex;
    width: 100%;
    align-items: top;
    justify-content: flex-start;
    flex-direction: row;
    h1 {
      width: 90%;
    }
  }

  .topbar{
    height: 80px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    // box-shadow: inset 4px 4px 10px #0099cc, inset -4px -4px 10px rgb(0, 115, 153);
    background: linear-gradient(to bottom,rgb(0, 103, 138) 0%,rgb(174, 187, 255) 100%) !important;
  }

  @media (max-width: 400px) {
    h1 {
      font-size: 2em;
    }
  }

  img {
      height: 56px;
      border-radius: 0%;
      margin: 10px;
      margin-left: 30px;
  }
`;
