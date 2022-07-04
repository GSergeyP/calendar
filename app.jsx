import React from 'react'
import Header from './header'
import Body from './body'
import ModalActivateOnClick from './modalActivateOnClick'
import Footer from './footer'
import {Calendar, CalendarH1, CalendarHeader, CalendarBody, CalendarFooter} from './css'

class CalendarView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null,
      activateDelete: null,
      currentDate: null,
      scrollStatus: true,
    };
    this.getData = this.getData.bind(this);
    this.getActivateDelete = this.getActivateDelete.bind(this);
    this.scroll = React.createRef();
  }
  getActivateDelete(activateDelete, currentDate) {
    this.setState({
      activateDelete: activateDelete,
      currentDate: currentDate,
    });
  }

  getData(date) {
    this.setState({date: date});
  }
  componentDidMount() {

    const element = this.scroll.current;
    if(this.state.scrollStatus) {
      let hoursDate = new Date(),
          hours = hoursDate.getHours(),
          offsetHeight = element.offsetHeight,
          start;
    
    start = offsetHeight / 18 * hours;
      element.scrollTo(0, start);
    }
  }
  componentWillUnmount() {
    this.setState({ scrollStatus: false, });
  } 
  render() {
    let { date, activateDelete, currentDate } = this.state;
    return(
      <Calendar>
        <ModalActivateOnClick 
          ref={isToggleOnModal => { this.modal = isToggleOnModal; }} 
          sendData = {this.getData}
        />
        <CalendarH1>
          Interview Calendar
          <button onClick={() => { this.modal.handleClickCancel(); }}>
            +
          </button>
        </CalendarH1>
        <CalendarHeader>
          <Header 
            sendData = {this.getData}
            date = {date} 
          />
        </CalendarHeader>
        <CalendarBody ref= {this.scroll}>
          <Body 
            sendActivateDelete = {this.getActivateDelete}
            date = {date} 
          />
        </CalendarBody>
        <CalendarFooter>
          <Footer
            sendData = {this.getData}
            activateDelete = {activateDelete}
            currentDate = {currentDate}
          />
        </CalendarFooter>
      </Calendar>
    );  
  }
}

export default CalendarView;