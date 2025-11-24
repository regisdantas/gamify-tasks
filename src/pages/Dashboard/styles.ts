import styled from 'styled-components';


export const DateContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  svg {
    cursor: pointer;
  }
`;

export const ContentContainer = styled.div`
  background: #002E36;
  padding: 15px;
`

export const EntryList = styled.div`
  width: 100%;
  padding-bottom: 10px;
`;

export const TitleBar = styled.p`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align:center;
  width: 100%;
  font-size: 12px;
  letter-spacing: 7px;
  text-transform: uppercase;
  background: #ffbb00;
  color: #000000;
  padding: 6px;
  font-weight: bolder;
  align-content: center;
`