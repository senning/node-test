var React = require('react');

var MainButton = React.createClass({
  getInitialState: function(){
    return {
      active: false
    }
  },

  handleClick: function(event){
    this.setState({active: !this.state.active});
  },

  render: function() {
    var buttonClasses = ["button", "button-primary"];
    buttonClasses.push("button-"+this.props.type);
    var buttonLabel = "Play";

    if(this.state.active){
      buttonClasses.push("button-active");
      buttonLabel = "Pause";
    }

    var buttonClass = buttonClasses.join(' ');

    return (
      <button className={buttonClass} onClick={this.handleClick} ref="mainbutton" type="button">{buttonLabel}</button>
      );
  }
});

module.exports = MainButton;