import React from 'react'
import {months, week} from './constants'
import {Week, MonthYear} from './css'

class Header extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
        date: null,
    };
  }
  dateNext(date){
    this.setState({date: date.setDate(date.getDate() - 6)}); 
    this.props.sendData(date);
  }
  datePrev(date){
    this.setState({date: date.setDate(date.getDate() - 8)});
    this.props.sendData(date);
  }
  render() {
    let { date } = this.state;
    
    if(this.props.date) date = this.props.date;
    
    if(!date) date = new Date();
    else date = new Date(date);
    let currentDate = new Date(),
      year = date.getFullYear(),
      month = date.getMonth(),
      day = date.getDate(),
      dayWeek = date.getDay(),
      days = [],
      monthYear,
      currentMonth;
    for(let i = 0; i < 7; i++) {
      if(
          year === currentDate.getFullYear() && 
          month === currentDate.getMonth() && 
          day === currentDate.getDate()
        ) { 
        days.push(
          <label key={date}>
            {week[dayWeek]}
            <button className="activ">
              {day}
            </button>
          </label>
        );
      }
      else {
        days.push(
          <label key={date}>
            {week[dayWeek]}
            <button>
              {day}
            </button>
          </label>
        );
      };
      if(i === 0) currentMonth = date.getMonth();
      if(currentMonth === date.getMonth()) monthYear = months[month];
      else monthYear = months[currentMonth]+' / '+months[month];
      date.setDate(date.getDate() + 1);
      day = date.getDate();
      dayWeek = date.getDay();
      month = date.getMonth();
      year = date.getFullYear();
    }
    return(
    <>
      <Week>
        {days}
      </Week>
      <MonthYear>
        <button onClick = {this.datePrev.bind(this, date)}>
          {'<'}
        </button>
          {monthYear+ ' ' +year}
        <button onClick= {this.dateNext.bind(this, date)}>
          {'>'}
        </button>
      </MonthYear>
    </>
    );
  }
}

export default Header;
