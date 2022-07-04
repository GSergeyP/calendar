import React from 'react'

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activateDelete: false,
    }
    this.activateDelete = this.activateDelete.bind(this); 
  }
  activateDelete() {
    let localSTORAGE = localStorage.getItem('date'),
        filtered;

    localSTORAGE = JSON.parse(localSTORAGE);
    filtered = localSTORAGE.filter((el) => { return el.id !== this.props.activateDelete; }); 
    localStorage.setItem('date',  JSON.stringify(filtered));
    
    this.setState({activateDelete: false})
    this.props.sendData(this.props.currentDate);
  }
  dateCurrent() {
    window.location.reload();
  } 

  componentDidUpdate(prevProps) {
    if(this.props.activateDelete !== prevProps.activateDelete) this.setState({activateDelete: true})
  }

  render(){
    return(
      <>
        <span onClick = {this.dateCurrent}>Today</span>
        { this.state.activateDelete && 
          <span onClick = {this.activateDelete}>
            Delete
          </span>
        }
      </>
    );
  }
}

export default Footer;