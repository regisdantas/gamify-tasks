import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 36px;
  color: #3a3a3a;
`;

export const CardContainer = styled.div`
  color: white;
  /* max-width: 400px; */
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0px;
  margin: 10px 0px 0px 0px;


  div {
    width: 100%;
  }

  .reward-box{
    img {
      height: 20px;
      margin-left: 50px;
    }

    flex: 1;
    display: flex;
    align-items: center;
    width: 100%;
    * {
      margin: 12px;
    }
    span {
      margin-left: 50px;
    }
    margin-right: 50px;
    // border: 1px solid white;
    
  }

  .ContentContainer {
    padding: 5px;
    padding-bottom: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;


    width: 100%;
    margin: 0;
    background:rgb(0, 24, 29);

    header {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      svg {
        margin: 2px;
        cursor: pointer;
      }
    }

    .collapsible {
      background-color: #eee;
      color: #444;
      cursor: pointer;
      padding: 18px;
      width: 100%;
      border: none;
      text-align: left;
      outline: none;
      font-size: 15px;
    }
    
    .active, .collapsible:hover {
      background-color: #ccc;
    }

    .button-space {
      padding: 0px;
      margin: 0px;
      width: fit-content;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    strong {
      width: 100%;
      padding: 10px;
      display: flex;
      gap: 10px;
      align-items: center;
      input,select {
        width: fit-content;
        margin: 0px;
        height: 30px;
        color: black;
      }
    }
    
  .content {
    width: 100%;
    padding: 18px;
    display: none;
    overflow: hidden;
    background-color:rgb(255, 0, 0);
  }

    .checkbox {
      color: red;
      width: 30px;
      margin-right: 40px; 
    }
`;
