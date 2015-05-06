var React = require('react');
var PageDefault = require('./layouts/default');
var MainButton = require('./mainbutton');

var Page = React.createClass({
  render: function() {
    return (
      <PageDefault title={this.props.title}>
        <header>
          <MainButton type="play" />
        </header>
        <section className="main"></section>
        <footer></footer>
      </PageDefault>
      );
  }
});

module.exports = Page;