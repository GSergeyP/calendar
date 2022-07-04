import React from 'react'
import {ModalForm, ModalBlock, Input, ButtonCancel, ButtonOk, MsgErr} from './css'

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
                  value: '',
                  dateErr: '',
                };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    let string = this.state.value,
        dataTemp = string.trim(),
        regex = /^[0-9]\d{3}[-]d{0}[0-9]\d{1}[-]d{0}[0-9]\d{1}[\s/]\d{0}[0-9]\d{1}[:]d{0}[0-9]\d{1}[:]d{0}[0-9]\d{1}$/;

    if(dataTemp === '') return(
      this.setState({dateErr: 'Пожалуйста, введите дату'}),
      event.preventDefault()
    );
    else if(regex.test(dataTemp) === false) return(
      this.setState({dateErr: 'Пожалуйста, проверьте на соответствие YYYY-MM-DD HH:mm:ss'}),
      event.preventDefault()
    );
    else {
      let data = dataTemp.split(' '),
          datePeriod = data[0].split('-'),
          dateTime = data[1].split(':'),
          year = Number(datePeriod[0]),
          month = Number(datePeriod[1]),
          day = Number(datePeriod[2]),
          dayMonth = new Date(year, month, 0).getDate(),
          hours = Number(dateTime[0]),
          minutes = Number(dateTime[1]),
          seconds = Number(dateTime[2]);

      if(year < 2015 || year > 2025) return(
        this.setState({dateErr: 'Год в интервале 2015 - 2025'}),
        event.preventDefault()
      );
      else if(month < 1 || month > 12) return(
        this.setState({dateErr: 'Проверьте коректность ведения месяца'}),
        event.preventDefault()
      );
      else if(day < 1 || day > dayMonth) return(
          this.setState({dateErr: 'Такого дня не существует'}),
          event.preventDefault()
      );
      else if(hours < 0 || hours > 23) return(
        this.setState({dateErr: 'Проверьте коректность ведения часов'}),
        event.preventDefault()
      );
      else if(minutes < 0 || minutes > 59) return(
        this.setState({dateErr: 'Проверьте коректность ведения минут'}),
        event.preventDefault()
      );
      else if(seconds < 0 || seconds > 59) return(
        this.setState({dateErr: 'Проверьте коректность ведения секунд'}),
        event.preventDefault()
      );
      else {
        let date = new Date(year, month - 1, day, hours, minutes, seconds),
            localSTORAGE = localStorage.getItem('date'),
            dateJSON = [],
            i;

        dateJSON = [{'id' : year+'/'+(month - 1)+'/'+day+'/'+hours}];
        if(localSTORAGE) {
          localSTORAGE = JSON.parse(localSTORAGE);
          for (i = 0; i < localSTORAGE.length; i++) {

            if((year+'/'+(month - 1)+'/'+day+'/'+hours) === localSTORAGE[i].id) return(
              this.setState({dateErr: 'Запись с данной датой существует'}),
              event.preventDefault()
            );
          }
          localStorage.setItem('date', JSON.stringify([...localSTORAGE, ...dateJSON]));
        }
        else localStorage.setItem('date',  JSON.stringify(dateJSON));
      
        this.props.sendData(date);
        this.props.isToggleOnModal();
        event.preventDefault();
      }
    }  
  }
  render(){
    let {dateErr} = this.state,
        msgErr;

    if(dateErr) msgErr = <MsgErr>{dateErr}</MsgErr>;
    return(
      <ModalForm>
        <ModalBlock onSubmit={this.handleSubmit}>
          <h3>https://calendar.com</h3>
          <p>
            Enter event time:<br />
            YYYY-MM-DD HH:mm:ss
          </p>
          <Input type="text" 
                 value = {this.state.value} 
                 onChange = {this.handleChange} 
                 placeholder="|" 
          />
          <br />
          <ButtonCancel type="button" onClick={() => { this.props.isToggleOnModal(); }}>Cancel</ButtonCancel>
          <ButtonOk type="submit">Ok</ButtonOk>
          {msgErr}
        </ModalBlock>
      </ModalForm>
    );
  }
}

export default Modal;