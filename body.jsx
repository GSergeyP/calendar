import React from 'react'

class Body extends React.Component {
  handleClick(activateDelete, currentDate) {
    this.props.sendActivateDelete(activateDelete, currentDate);
  }
  
  render() {
    let date = this.props.date;
   
    if(!date) date = new Date();
    
    let year = date.getFullYear(),
        month = date.getMonth(),
        day = date.getDate(),
        hours = 0,
        currentDate = date,
        markArray = [],
        markHours = [],
        mark = [],
        localSTORAGE = localStorage.getItem('date'),
        localStorageJSON,
        classesBorder,
        classes;
        
    for (let i = 0; i < 24; i++) {
      markHours = (<div key = {hours+'/'+i} className="markHours"><h3>{hours+':00'}</h3></div>);
      for(let k = 0; k < 7; k++) {
        if(k === 0) classesBorder = 'left';
        else if(k === 6) classesBorder = 'right';
        else classesBorder = '';
        
        if(localSTORAGE) {
          localStorageJSON = JSON.parse(localSTORAGE);
          for (let j = 0; j < localStorageJSON.length; j++) {
            if((year+'/'+month+'/'+day+'/'+hours) === localStorageJSON[j].id) classes = 'marking'; 
          }
        }
        if(classes) mark.push(
          <button key = {year+'/'+month+'/'+day+'/'+hours} className={classes+' '+classesBorder}
            onClick={this.handleClick.bind(this, year+'/'+month+'/'+day+'/'+hours, currentDate)}
          />
        );
        else if(classesBorder) mark.push(           
          <button key = {year+'/'+month+'/'+day+'/'+hours} className={classesBorder} />
        );
        else mark.push(           
          <button key = {year+'/'+month+'/'+day+'/'+hours} />
        );

        date.setDate(date.getDate() + 1);
        day = date.getDate();
        classes = '';
      }
      markArray.push(<div key = {hours}>{markHours}<div className="mark">{mark}</div></div>);
      markHours = [];
      mark = [];
      date.setDate(date.getDate() - 7);
      day = date.getDate();
      hours += 1;
    }
    return(
      <>
        {markArray}
      </>
    );
  }
}

export default Body;