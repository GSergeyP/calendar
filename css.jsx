import styled from 'styled-components'

const Calendar = styled.div`
  @media (min-width: 741px) {
    margin-left: auto;
    margin-right: auto;
    width: 740px;
  }

  @media (max-width: 740px) {
    width: 100%;
  }
`;
const CalendarH1 = styled.h1`
  position: relative;

  @media (min-width: 741px) {
    left: 3vw;
    font-size: 4vw;
  }
  @media (max-width: 740px) {
    left: 10vw;
    font-size: 6vw;
  }

  button {
    position: absolute;
    background: none;
    border: none;
    color: #ff3131;
    cursor: pointer;

    @media (min-width: 741px) {
      top: 0.3vw;
      right: 6vw;
      font-size: 4vw;
    }
    
    @media (max-width: 740px) {
      top: -1.5vw;
      right: 15vw;
      font-size: 10vw;
    }
  }
`;
const CalendarHeader = styled.div`
  position: relative;
  background: #f6f6f6;
  opacity: 1;  
  border-top: solid #efefef 2px;
  border-bottom: solid #efefef 2px;
  z-index: 5;

  @media (min-width: 741px) {
    padding: 0.5vw 0;
    height: 7vw;
  }

  @media (max-width: 740px) {
    padding: 1vw 0;
    height: 23vw;
  }
`;
const Week = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-end;

  @media (min-width: 741px) {
    height: 5vw;
  }

  @media (max-width: 740px) {
    height: 17vw;
  }

  label {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 12%;

    @media (min-width: 741px) {
      font-size: 1.2vw;
    }

    @media (max-width: 740px) {
      font-size: 2.5vw;
    }

    button {
      background: none;
      border: none;

      @media (min-width: 741px) {
        height: 3vw;
        width: 3vw;
        border-radius: 2vw;
        font-size: 1.6vw;
      }

      @media (max-width: 740px) {
        height: 9vw;
        width: 9vw;
        border-radius: 5vw;
        font-size: 5vw;
      }

      &.activ {
        background: #ff3131;
        color: #ffffff;
      }
    }
  }
`;
const MonthYear = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 84%;

  @media (min-width: 741px) {
    font-size: 1.5vw;
  }

  @media (max-width: 740px) {
    font-size: 5vw;
  }

  button {
    background: none;
    border: none;
    color: #ff3131;
    cursor: pointer;

    @media (min-width: 741px) {
      font-size: 2vw;
    }
  
    @media (max-width: 740px) {
      font-size: 6vw;
    }
  }
`;
const CalendarBody = styled.div`
  @media (min-width: 741px) {
    height: 30vw;
    overflow-y: scroll;
  }

  @media (max-width: 740px) {
    height: 70vw;
    overflow-y: scroll;
  }

  div{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    width: 100%; 

    @media (min-width: 741px) {
      height: 4vw;
    }
    @media (max-width: 740px) {
      height: 9vw;
    }

    .markHours {
      position: relative;
      width: 18vw; 
      
      h3 {
        position: absolute;
        color: #c6c6c6;
        
        @media (min-width: 741px) {       
          top: -2.3vw;
          right: 3vw;
          font-size: 1.5vw;
        }
        @media (max-width: 740px) {
          top: -7vw;
          right: 5vw;
          font-size: 4vw;
        }
      }
    }

    .mark {
      position: relative;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: space-between;
      width: 82vw; 
      background: #efefef; 

      button {
        width: 95%;  
        height: auto;
        background: #ffffff;
        border: none;
        margin: 0.2vw 0.1vw;
        padding: 0;

        &.left {
          margin: 0.2vw 0.1vw 0.2vw 0;
        }

        &.right {
          margin: 0.2vw 0 0.2vw 0.1vw;
        }
        &.marking {
          background: #ebecff;
          border: #ffffff solid 1.5px;
          cursor: pointer;

            &:focus {
            background: #b3b7ff;
            border: #ffffff solid 1.5px;
            cursor: pointer;
          }
        }
      } 
    }
  }
`;
const CalendarFooter = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  background: #f6f6f6;
  opacity: 0.9; 
  padding: 1.5vw 10vw; 

  span {
    font-size: 1.8vw;
    cursor: pointer;
    color: #ff3131;

    @media (min-width: 741px) {
      font-size: 1.8vw; 
    } 
    @media (max-width: 740px) {
      font-size: 5vw; 
    }
  }
`;
const ModalForm = styled.div`
  z-index: 10;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.6); 

  ///////////////////////
  animation-name: animate;
  animation-duration: 1s;

  @keyframes animate {
    from {top: -1000px; }
    to {top:0; }
  }
`;
const ModalBlock = styled.form`
  position: relative;
  background: #e6e6e7;
  opacity: 1;
  text-align: center;
  z-index: 15;

  @media (min-width: 741px) {
    border-radius: 2vw;
  }

  @media (max-width: 740px) {
    border-radius: 5vw;
  }

  h3 {
    margin-top: 1vw;
    margin-bottom: 0;
    padding: 0 0;
  }

  p {
    padding: 0 0;
    margin: 0;
  }
`;
const Input = styled.input`
  color: #007aff;
  background: #ffffff;
  border: solid #909094 1px;
  outline: none;

  @media (min-width: 741px) {
    padding: 0.5vw;
    margin: 0.5vw;
    width: 26vw;
  }

  @media (max-width: 740px) {
    padding: 3vw;
    margin: 3vw;
    width: 65vw;
    font-size: 5vw; 
  }

  &::placeholder {
    color: #007aff;

    @media (max-width: 740px) {
      font-size: 5vw;
    }
  }
`;
const ButtonCancel = styled.button`
  border-top: solid #909094 1px;
  border-left: none;
  border-right: none;
  border-bottom: none;
  background: none;
  color: #007aff;
  cursor: pointer;

  @media (min-width: 741px) {
    border-radius: 0 0 0 2vw;
    margin-top: 0.5vw;
    width: 15vw;
    height: 3.5vw;
  }

  @media (max-width: 740px) {
    border-radius: 0 0 0 5vw;
    margin-top: 3vw;
    width: 45vw;
    height: 15vw;
    font-size: 5vw;
  }
`;
const ButtonOk = styled.button`
  border-top: solid #909094 1px;
  border-left: solid #909094 1px;
  border-right: none;
  border-bottom: none;
  background: none;
  color: #007aff;
  cursor: pointer;

  @media (min-width: 741px) {
    border-radius: 0 0 2vw 0;
    margin-top: 0.5vw;
    width: 15vw;
    height: 3.5vw;
  }

  @media (max-width: 740px) {
    border-radius: 0 0 5vw 0;
    margin-top: 3vw;
    width: 45vw;
    height: 15vw;
    font-size: 5vw;
  }

`;
const MsgErr = styled.span`

  position: absolute;
  top: 100%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, 50%) }
  background: #e6e6e7;
  border-radius: 2vw;
  width: auto;
  height: auto;
  padding: 1vw;
  color: #007aff;
`;
export {
        Calendar, 
        CalendarH1, 
        CalendarHeader, 
        CalendarBody, 
        CalendarFooter, 
        Week,
        MonthYear,
        ModalForm,
        ModalBlock,
        Input,
        ButtonCancel,
        ButtonOk,
        MsgErr,
      }