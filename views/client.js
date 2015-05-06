var React = require("react"),
  Home = React.createFactory(require("home"));

if( typeof window !== "undefined"){
  window.onload = function(){
    React.render(Home(), document.body);
  }
}