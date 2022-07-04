import React from 'react'
import Modal from './modal'

class ModalActivateOnClick extends React.Component {
  constructor(props) {
    super(props);   
    this.state = {
      isToggleOnModal: false,
    };
    this.handleClickCancel = this.handleClickCancel.bind(this);
  }
  handleClickCancel() {
    this.setState(prevState => ({
      isToggleOnModal: !prevState.isToggleOnModal
    }));
  }
  render() {
    const isToggleOnModal = this.state.isToggleOnModal;
    if(isToggleOnModal){
      return(
        <Modal 
          isToggleOnModal = {this.handleClickCancel} 
          sendData = { this.props.sendData}
        />
      );
    }
  }
}

export default ModalActivateOnClick;