import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ''
    };
  }
  onChangeEventHandler = (event) => {

  this.setState({
    value: event.target.value,
  });
}
  valueRemainingChar = () => {
     if((this.props.maxChars - this.state.value.length) < 0){

      alert("limit char reached") 
    }else {
      return (this.props.maxChars - this.state.value.length)
    }
  }
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message"
        value = {this.state.value}
        onChange = {this.onChangeEventHandler}
        />
        Remaining Characters: {this.valueRemainingChar()}
      </div>
    );
  }
}

export default TwitterMessage;
