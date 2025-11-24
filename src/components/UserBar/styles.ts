import styled from 'styled-components';

export const UserBarContainer = styled.div`
  font-family: 'Press Start 2P';
  font-size: 12px;
  width: 100%;
  padding: 10px;
  display: flex;
  margin: 0px;
  flex-direction: row;
  justify-content: right;
  align-items: center;
  // background: #FED43A;
  // box-shadow: inset 4px 4px 10px #FED43A, inset -4px -4px 10px #007399;
  // background: linear-gradient(to bottom, #FED43A 0%, #ffbb00 100%) !important;
  background: linear-gradient(to bottom,rgb(173, 252, 255) 0%,rgb(0, 116, 110) 100%) !important;

  .icons {
    height: 24px;
    margin: 6px;
    padding-bottom: 5px;
  }
  .userpic {
    height: 64px;
    border-radius: 50%;
    margin-right: 20px;
    margin-left: 20px;
  }
  svg {
    cursor: pointer;
  }

  .score-space {
      padding: 0px;
      margin: 0px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-self: end;
      span {
        width: 100%;
        height: 100% !important;
        text-align: center;
        padding: 4px;
        margin-bottom: 10px;
      }
      img {
        margin: auto;
      }
        div {
          text-align: center;
          
        }
    }
`

export const Spacer = styled.div`
  width: 40px;
`
