var React = require('react');

var PageDefault = React.createClass({
  render: function() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <link rel="stylesheet" type="text/css" href="assets/style.css" />
        </head>
        <body>
          {this.props.children}
          <script type="text/javascript" src="assets/app.js" />
        </body>
      </html>
      );
  }
});

module.exports = PageDefault;